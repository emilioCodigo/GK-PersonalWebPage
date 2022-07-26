import { NgwWowService } from 'ngx-wow'
import { Component, OnInit, inject, Renderer2, ViewChild, AfterViewInit } from '@angular/core'
import SwiperCore, {
    Swiper,
    SwiperOptions,
    Autoplay,
    Scrollbar,
    Pagination,
    EffectFlip,
    EffectFade,
    EffectCards,
    EffectCube,
} from 'swiper'
SwiperCore.use([Autoplay, Scrollbar, Pagination, EffectFlip, EffectFade, EffectCards, EffectCube])
@Component({
    selector: 'app-home-intro',
    templateUrl: './home-intro.component.html',
    styleUrls: ['./home-intro.component.scss'],
})
export class HomeIntroComponent implements OnInit, AfterViewInit {
    displayItems: iDisplayItem[] = [
        {
            imgPath: 'angular_logo.png',
            title: 'Angular 14',
            desc: '手上大部分前端開發使用的框架。<br>2022年4月使用至今',
        },
        {
            imgPath: 'node_logo.png',
            title: 'Node.js',
            desc: '處理特殊個案時用的語言，<br>如：爬蟲解析、音波分析、聊天軟體機器人<br>2021年7月使用至今',
        },
        {
            imgPath: 'spring_logo.png',
            title: 'SpringBoot',
            desc: '正在自學的後端框架。<br>2022年7月使用至今',
        },
        {
            imgPath: 'fl_logo.png',
            title: 'FL Studio',
            desc: '在家最常用的音頻工作站，<br>同時也是我的最愛的桌上軟體<br>2017年使用至今',
        },
        {
            imgPath: 'vscode_logo.png',
            title: 'VS Code',
            desc: '目前最愛用的文本編輯器。<br>2021年使用至今',
        },
    ]
    config: SwiperOptions = {
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        loop: true,
        spaceBetween: 50,
        effect: 'cards',
        cardsEffect: { slideShadows: false },
        centeredSlides: true,
        pagination: { clickable: true },
        scrollbar: { draggable: true },
        slidesPerView: 1,
    }
    constructor(private r2: Renderer2) {
        inject(NgwWowService).init()
    }
    ngAfterViewInit(): void {}

    ngOnInit(): void {}
}

interface iDisplayItem {
    title: string
    imgPath: string
    desc?: string
}
