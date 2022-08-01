import { AfterViewInit, Component, inject, Input, OnInit } from '@angular/core';
import { iHomeLayout } from '@app/model/layout.model';
import { iSteamGameInfo } from '@app/model/steamGame.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgwWowService } from 'ngx-wow';
import { delay, firstValueFrom, of, throwError, timeout } from 'rxjs';
import { DUMMY_steamData } from './../../../constant/dummy/steam.data';
import { SteamPersonalService } from './../../../service/api/steam-personal.service';

@Component({
  selector: 'app-home-chart',
  templateUrl: './home-chart.component.html',
  styleUrls: ['./home-chart.component.scss'],
})
export class HomeChartComponent implements OnInit, AfterViewInit {
  MystWord: string[] = [];
  isAPIFinished = false;
  @Input() layout!: iHomeLayout;
  myGameList: iSteamGameInfo[] = [];
  constructor(
    private steamServ: SteamPersonalService,
    private spinner: NgxSpinnerService
  ) {
    this.spinner.show();
    inject(NgwWowService).init();
    this.dummyAPI();
    // this.fetchAPI();
    this.loopMystWord();
  }
  dummyAPI() {
    of(DUMMY_steamData)
      .pipe(delay(1000 * 0.3))
      .subscribe((r) => {
        this.myGameList = r;
        this._updateCharts();
      });
  }
  fetchAPI() {
    this.steamServ.getMyGames().subscribe(async (games) => {
      const length = Math.min(10, games.length + 1);
      for (let i = 0; i < length; i++) {
        const appid = games[i].appid;
        const playTime_hour = Math.floor((games[i].playtime_forever || 0) / 60);
        await firstValueFrom(
          this.steamServ.getGameInfo(appid || 0).pipe(
            timeout({
              each: 1000,
              with: () => throwError(() => {}),
            })
          )
        )
          .then((gameInfo) => {
            const tempGame: iSteamGameInfo = {
              appid: appid,
              playTime_hour: playTime_hour,
              name: gameInfo.name,
              storeurl: gameInfo.storeurl,
              header_image: gameInfo.header_image,
              background: gameInfo.background,
              screenshots: gameInfo.screenshots,
              categories: gameInfo.categories,
              movies: gameInfo.movies,
              metacritic: gameInfo.metacritic,
              about_the_game: gameInfo.about_the_game,
            };
            this.myGameList.push(tempGame);
          })
          .catch(() => {
            // this.myGameList = DUMMY_steamData
          });
      }
      this._updateCharts();
    });
  }
  focusGame!: iSteamGameInfo;

  _updateCharts() {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.myGameList.sort((a, b) => b.metacritic!.score - a.metacritic!.score);
    this.focusGame = this.myGameList[0];
    this.spinner.hide();
    this.isAPIFinished = true;
  }
  async loopMystWord() {
    const base = '遊戲推薦';
    const list = ['施工中', '未完成'];
    this.MystWord = [...base];
    const pushWord = (w: string) => {
      return firstValueFrom(of(this.MystWord.push(w)).pipe(delay(500)));
    };
    const popWord = () => {
      return firstValueFrom(of(this.MystWord.pop()).pipe(delay(500)));
    };
    const AllTrue = true;
    while (true == AllTrue) {
      for (let i = 0; i < list.length; i++) {
        const word = list[i];
        for (let j = 0; j < word.length; j++) {
          await pushWord(word[j]);
        }
        for (let j = 0; j < word.length; j++) {
          await popWord();
        }
      }
    }
  }
  ngAfterViewInit(): void {}
  ngOnInit(): void {}
}
