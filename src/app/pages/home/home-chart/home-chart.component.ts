import { iHomeLayout } from '@app/model/layout.model'
import { NgwWowService } from 'ngx-wow'
import { AfterViewInit, Component, inject, Input, OnInit } from '@angular/core'
import { ViewChild } from '@angular/core'
import DatalabelsPlugin from 'chartjs-plugin-datalabels'
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js'
import { BaseChartDirective } from 'ng2-charts'

@Component({
    selector: 'app-home-chart',
    templateUrl: './home-chart.component.html',
    styleUrls: ['./home-chart.component.scss'],
})
export class HomeChartComponent implements OnInit, AfterViewInit {
    @Input() layout!: iHomeLayout
    gameList: iSteamGame[] = [
        { name: 'Cities: Skylines', hour: 638 },
        { name: 'Team Fortress 2', hour: 462 },
        { name: 'Grand Theft Auto V', hour: 247 },
        { name: 'Darkest Dungeon®', hour: 258 },
        { name: 'Monster Train', hour: 252 },
        { name: 'Crusader Kings III', hour: 168 },
        { name: 'Slay the Spire', hour: 163 },
    ]
    constructor() {
        inject(NgwWowService).init()
    }
    ngAfterViewInit(): void {
        this.pie.width = 200
        this.pie.height = 200
    }
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
        labels: this.gameList.map((e) => e.name),
        datasets: [{ hoverBorderColor: '#fff', data: this.gameList.map((e) => e.hour) }],
    }
    pieChartType: ChartType = 'pie'
    pieChartPlugins = [DatalabelsPlugin]
}
interface iSteamGame {
    name: string
    hour: number
}
