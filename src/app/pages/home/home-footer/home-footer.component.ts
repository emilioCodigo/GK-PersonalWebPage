import { NgwWowService } from 'ngx-wow'
import { Component, HostListener, inject, OnInit } from '@angular/core'

@Component({
    selector: 'app-home-footer',
    templateUrl: './home-footer.component.html',
    styleUrls: ['./home-footer.component.scss'],
})
export class HomeFooterComponent implements OnInit {
    mousePercent = '100%'
    @HostListener('mousemove', ['$event']) onMouseMove(evt: MouseEvent) {
        const allWidth = document.body.offsetWidth
        this.mousePercent = ((evt.x / allWidth) * 100).toFixed(2) + '%'
    }
    @HostListener('mouseleave', ['$event']) onMouseLeave() {
        this.mousePercent = '離開'
    }
    imgList: string[] = [
        'AnimeJS',
        'footer_aosjs',
        'footer_bootstrap',
        'footer_swiperjs',
        'footer_chart',
    ]
    constructor() {
        inject(NgwWowService).init()
    }

    ngOnInit(): void {}
}
