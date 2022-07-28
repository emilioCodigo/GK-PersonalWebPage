import { Component, Input, OnChanges, OnInit, ViewChild, ViewContainerRef } from '@angular/core'
import { iSteamGameInfo } from '@app/model/steamGame.model'
import { HomeChartKeenComponent } from './../home-chart-keen/home-chart-keen.component'

@Component({
    selector: 'app-home-chart-board',
    templateUrl: './home-chart-board.component.html',
    styleUrls: ['./home-chart-board.component.scss'],
})
export class HomeChartBoardComponent implements OnInit, OnChanges {
    @ViewChild('dynamic', { read: ViewContainerRef })
    private viewRef!: ViewContainerRef
    constructor() {}

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.setView()
        }, 0)
    }
    ngOnChanges(): void {
        if (this.viewRef) {
            this.setView()
        }
    }
    ngOnInit(): void {}
    @Input() focusGame!: iSteamGameInfo

    setView() {
        this.viewRef.clear()
        const componentRef = this.viewRef.createComponent(HomeChartKeenComponent)
        componentRef.instance.focusGame = Object.assign({}, this.focusGame)
    }
}
