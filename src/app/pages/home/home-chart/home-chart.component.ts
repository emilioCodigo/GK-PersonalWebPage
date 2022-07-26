import { DUMMY_steamData } from './../../../constant/dummy/steam.data'
import { SteamPersonalService } from './../../../service/api/steam-personal.service'
import { iHomeLayout } from '@app/model/layout.model'
import { NgwWowService } from 'ngx-wow'
import { AfterViewInit, Component, inject, Input, OnInit } from '@angular/core'
import { ViewChild } from '@angular/core'
import DatalabelsPlugin from 'chartjs-plugin-datalabels'
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js'
import { BaseChartDirective } from 'ng2-charts'
import { concatMap, delay, firstValueFrom, map, of } from 'rxjs'
import { iSteamGameInfo } from '@app/model/steamGame.model'
import { NgxSpinnerService } from 'ngx-spinner'
import { lstat } from 'fs'

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
        this.loopMystWord()
    }
    dummyAPI() {
        of(DUMMY_steamData)
            .pipe(delay(4000 * 1))
            .subscribe((r) => {
                this.myGameList = r
                this._updatePieChart()
            })
    }
    fetchAPI() {
        this.steamServ.getMyGames().subscribe(async (games) => {
            const length = Math.min(5, games.length + 1)
            for (let i = 0; i < length; i++) {
                const appid = games[i].appid
                const playTime_hour = Math.floor((games[i].playtime_forever || 0) / 60)
                await firstValueFrom(this.steamServ.getGameInfo(appid || '')).then((gameInfo) => {
                    const tempGame: iSteamGameInfo = {
                        appid: appid,
                        playTime_hour: playTime_hour,
                        gamename: gameInfo.gamename,
                        storeurl: gameInfo.storeurl,
                        header_image: gameInfo.header_image,
                    }
                    console.log(tempGame)
                    this.myGameList.push(tempGame)
                })
            }
            this._updatePieChart()
        })
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
    _updatePieChart() {
        this.spinner.hide()

        const playTime_hourArray = this.myGameList.map((e) => e.playTime_hour || 0)
        this.pieChartData = {
            labels: this.myGameList.map((e) => e.gamename || ''),
            datasets: [
                {
                    hoverBorderColor: '#fff',
                    data: playTime_hourArray,
                },
            ],
        }

        this.isAPIFinished = true
        this.chart?.update()
    }
    ngAfterViewInit(): void {}
    ngOnInit(): void {}
    @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined
    @ViewChild('pie') pie!: HTMLCanvasElement
    pieChartOptions: ChartConfiguration['options'] = {
        color: '#fff',
        borderColor: '#000',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                text: 'Steam時數表',
                display: true,
                color: '#fff',
                font: { weight: 'bold', size: 20 },
            },
            tooltip: { titleColor: '#fff' },
            subtitle: { color: '#fff' },
            legend: {
                display: false,
                position: 'top',
                labels: { font: { weight: 'bold', size: 14 }, color: '#fff' },
            },
            datalabels: { display: false, color: '#000', font: { weight: 'bold', size: 14 } },
        },
        aspectRatio: 1,
    }
    pieChartData: ChartData<'pie', number[], string | string[]> = {
        labels: this.myGameList.map((e) => e.gamename || ''),
        datasets: [
            { hoverBorderColor: '#fff', data: this.myGameList.map((e) => e.playTime_hour || 0) },
        ],
    }
    pieChartType: ChartType = 'pie'
    pieChartPlugins = [DatalabelsPlugin]
}
