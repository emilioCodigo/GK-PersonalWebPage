import {
    AfterViewInit,
    Component,
    ElementRef,
    HostListener,
    inject,
    Input,
    OnInit,
    Renderer2,
    ViewChild,
} from '@angular/core'
import { iHomeLayout } from '@app/model/layout.model'
import * as aos from 'aos'
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown'
import { NgwWowService } from 'ngx-wow'
import { isNull } from 'underscore'
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
export class HomeHeaderComponent implements OnInit, AfterViewInit {
    isOpenSideMenuRWD = false
    @ViewChild('rwd_menu') rwd_menu!: ElementRef
    @ViewChild('hamburger') hamburger!: ElementRef
    @HostListener('window:click', ['$event']) onWindowsClick() {
        this.isOpenSideMenuRWD = false
    }

    r2 = inject(Renderer2)
    @Input() layout!: iHomeLayout
    linkData: iLinkData[] = [
        { title: '關於我', ID: 'id-home-intro' },
        { title: '興趣標籤', ID: 'id-home-two-color' },
        { title: '圖表分析', ID: 'id-home-skill' },
    ]
    constructor() {
        aos.init()
        inject(NgwWowService).init()
    }
    ngAfterViewInit(): void {
        this.rwd_menu.nativeElement.addEventListener('click', (e: PointerEvent) => {
            e.stopPropagation()
        })
        this.hamburger.nativeElement.addEventListener('click', (e: PointerEvent) => {
            e.stopPropagation()
            this.isOpenSideMenuRWD = true
        })
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
