import { ColorEnum } from './../../../constant/enum/color.enum'
import { DUMMY_steamData } from './../../../constant/dummy/steam.data'
import { SteamPersonalService } from './../../../service/api/steam-personal.service'
import { iHomeLayout } from '@app/model/layout.model'
import { NgwWowService } from 'ngx-wow'
import { AfterViewInit, Component, ElementRef, inject, Input, OnInit } from '@angular/core'
import { ViewChild } from '@angular/core'
import DatalabelsPlugin from 'chartjs-plugin-datalabels'
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js'
import { BaseChartDirective } from 'ng2-charts'
import { concatMap, delay, firstValueFrom, map, of, throwError, timeout } from 'rxjs'
import { iSteamGameInfo } from '@app/model/steamGame.model'
import { NgxSpinnerService } from 'ngx-spinner'
import { lstat } from 'fs'
import { each } from 'underscore'

@Component({
    selector: 'app-home-chart',
    templateUrl: './home-chart.component.html',
    styleUrls: ['./home-chart.component.scss'],
})
export class HomeChartComponent implements OnInit, AfterViewInit {
    MystWord: string[] = []
    isAPIFinished = false
    @Input() layout!: iHomeLayout
    myGameList: iSteamGameInfo[] = []
    constructor(private steamServ: SteamPersonalService, private spinner: NgxSpinnerService) {
        this.spinner.show()
        inject(NgwWowService).init()
        this.dummyAPI()
        // this.fetchAPI()
        this.loopMystWord()
    }
    dummyAPI() {
        of(DUMMY_steamData)
            .pipe(delay(1000 * 0.1))
            .subscribe((r) => {
                this.myGameList = r
                this._updateCharts()
            })
    }
    fetchAPI() {
        this.steamServ.getMyGames().subscribe(async (games) => {
            const length = Math.min(10, games.length + 1)
            for (let i = 0; i < length; i++) {
                const appid = games[i].appid
                const playTime_hour = Math.floor((games[i].playtime_forever || 0) / 60)
                await firstValueFrom(
                    this.steamServ.getGameInfo(appid || '').pipe(
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
                            gamename: gameInfo.gamename,
                            storeurl: gameInfo.storeurl,
                            header_image: gameInfo.header_image,
                        }
                        this.myGameList.push(tempGame)
                    })
                    .catch(() => {})
            }
            this._updateCharts()
        })
    }

    _updateCharts() {
        console.log('update')
        this.spinner.hide()

        const playTime_hourArray = this.myGameList.map((e) => e.playTime_hour || 0)

        this.barChartData = {
            labels: this.myGameList.map((e) => e.gamename || ''),
            datasets: [
                {
                    backgroundColor: '#ddd',
                    hoverBackgroundColor: ColorEnum['orange'],
                    hoverBorderColor: '#fff',
                    data: playTime_hourArray,
                    label: '小時',
                },
            ],
        }

        this.isAPIFinished = true
        this.chart2?.update()
    }
    async loopMystWord() {
        const base = '掌握'
        const list = ['時間', '自由']
        this.MystWord = [...base]
        const pushWord = (w: string) => {
            return firstValueFrom(of(this.MystWord.push(w)).pipe(delay(500)))
        }
        const popWord = () => {
            return firstValueFrom(of(this.MystWord.pop()).pipe(delay(500)))
        }
        const AllTrue = true
        while (true == AllTrue) {
            for (let i = 0; i < list.length; i++) {
                const word = list[i]
                for (let j = 0; j < word.length; j++) {
                    await pushWord(word[j])
                }
                for (let j = 0; j < word.length; j++) {
                    await popWord()
                }
            }
        }
    }
    ngAfterViewInit(): void {}
    ngOnInit(): void {}

    @ViewChild(BaseChartDirective) chart2: BaseChartDirective | undefined
    @ViewChild('chartDiv') chartDiv!: ElementRef
    public barChartOptions: ChartConfiguration['options'] = {
        responsive: true,
        maintainAspectRatio: false,
        // maintainAspectRatio: true,
        scales: {
            x: {},
            y: {
                min: 100,
                max: 700,
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            datalabels: {
                display: false,
                anchor: 'end',
                align: 'end',
            },
        },
    }

    // ---
    barChartType: ChartType = 'bar'
    barChartPlugins = [DatalabelsPlugin]

    public barChartData: ChartData<'bar'> = {
        labels: [],
        datasets: [],
    }
}
