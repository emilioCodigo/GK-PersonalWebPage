import { NgwWowService } from 'ngx-wow'
import { Component, OnInit, inject } from '@angular/core'
import SwiperCore, { SwiperOptions, Autoplay, Scrollbar, Pagination } from 'swiper'
SwiperCore.use([Autoplay, Scrollbar, Pagination])
@Component({
    selector: 'app-home-intro',
    templateUrl: './home-intro.component.html',
    styleUrls: ['./home-intro.component.scss'],
})
export class HomeIntroComponent implements OnInit {
    displayItems: iDisplayItem[] = [
        { imgPath: 'angular_logo.png', title: 'Angular' },
        { imgPath: 'node_logo.png', title: 'Node.js' },
        { imgPath: 'spring_logo.png', title: 'SpringBoot' },
        { imgPath: 'fl_logo.png', title: 'FL Studio' },
        { imgPath: 'vscode_logo.png', title: 'VS Code' },
    ]
    config: SwiperOptions = {
        autoplay: {
            delay: 900,
            disableOnInteraction: false,
        },
        loop: true,
        spaceBetween: 50,
        centeredSlides: true,
        pagination: { clickable: true },
        scrollbar: { draggable: true },
        breakpoints: {
            1: {
                slidesPerView: 1,
            },
            400: {
                slidesPerView: 2,
            },
            770: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
            1400: {
                slidesPerView: 5,
            },
        },
    }
    constructor() {
        inject(NgwWowService).init()
    }

    ngOnInit(): void {}
}
interface iDisplayItem {
    title: string
    imgPath: string
}
