import { NgwWowService } from 'ngx-wow'
import anime from 'animejs'
import { AfterViewInit, Component, inject, OnInit } from '@angular/core'
import { iHomeLayout } from '@app/model/layout.model'
import { HomeLayoutService } from '@app/service/layout/home-layout.service'
@Component({
    selector: 'app-home-main',
    templateUrl: './home-main.component.html',
    styleUrls: ['./home-main.component.scss'],
})
export class HomeMainComponent implements OnInit, AfterViewInit {
    constructor() {
        inject(NgwWowService).init()
        inject(HomeLayoutService)
            .getHomeLayout$()
            .subscribe((result) => {
                this.layout = result
            })
    }

    layout!: iHomeLayout
    ngOnInit(): void {}
    ngAfterViewInit(): void {
        anime({
            targets: '#article-intro',
            width: ['0%', '100%'],
            duration: 800,
            easing: 'linear',
        })
    }
    onClick() {}
}
