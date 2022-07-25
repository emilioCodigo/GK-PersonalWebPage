import { BsDropdownConfig } from 'ngx-bootstrap/dropdown'
import { Component, inject, Input, OnInit, Renderer2, ViewChild } from '@angular/core'
import { iHomeLayout } from '@app/model/layout.model'
import * as aos from 'aos'
import { NgwWowService } from 'ngx-wow'
import { isNull } from 'underscore'
import { HomeLayoutService } from './../../../service/layout/home-layout.service'
interface iLinkData {
    title: string
    ID: string
}

@Component({
    providers: [{ provide: BsDropdownConfig, useValue: { autoClose: true } }],
    selector: 'app-home-header',
    templateUrl: './home-header.component.html',
    styleUrls: ['./home-header.component.scss'],
})
export class HomeHeaderComponent implements OnInit {
    @ViewChild('dropdownMenu') ddMenu!: HTMLLIElement
    r2 = inject(Renderer2)
    @Input() layout!: iHomeLayout
    linkData: iLinkData[] = [
        { title: '關於我', ID: 'id-home-intro' },
        { title: '興趣標籤', ID: 'id-home-two-color' },
        { title: '個人圖表', ID: 'id-home-skill' },
    ]
    constructor() {
        aos.init()
        inject(NgwWowService).init()
    }
    ngOnInit(): void {}

    clickScroll(ID: string) {
        if (!isNull(document.getElementById(ID))) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            document.getElementById(ID)!.scrollIntoView({ behavior: 'smooth' })
        }
    }
    toZeroAndZero() {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        document.body.scrollIntoView({ behavior: 'smooth' })
    }
}
