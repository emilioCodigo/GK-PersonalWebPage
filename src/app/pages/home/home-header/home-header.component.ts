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
} from '@angular/core';
import { iHomeLayout } from '@app/model/layout.model';
import * as aos from 'aos';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { NgwWowService } from 'ngx-wow';
import { isNull } from 'underscore';
interface iLinkData {
  title: string;
  ID: string;
}

@Component({
  providers: [{ provide: BsDropdownConfig, useValue: { autoClose: true } }],
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
})
export class HomeHeaderComponent implements OnInit, AfterViewInit {
  isOpenSideMenuRWD = false;
  @ViewChild('rwd_menu') rwd_menu!: ElementRef;
  @ViewChild('hamburger') hamburger!: ElementRef;
  @HostListener('window:click', ['$event']) onWindowsClick() {
    this.isOpenSideMenuRWD = false;
  }
  @Input() layout!: iHomeLayout;
  linkData: iLinkData[] = [
    { title: '關於站主', ID: 'id-home-intro' },
    { title: '興趣愛好', ID: 'id-home-two-color' },
    { title: '遊戲推薦', ID: 'id-home-steam' },
  ];
  sidProjects: iSideProject[] = [
    { name: '谷歌翻譯聊天室' },
    { name: '不和諧機器人' },
    { name: '蒸氣平台個人頁' },
  ];
  constructor() {
    aos.init();
    inject(NgwWowService).init();
  }
  ngAfterViewInit(): void {
    this.rwd_menu.nativeElement.addEventListener('click', (e: PointerEvent) => {
      e.stopPropagation();
    });
    this.hamburger.nativeElement.addEventListener(
      'click',
      (e: PointerEvent) => {
        e.stopPropagation();
        this.isOpenSideMenuRWD = true;
      }
    );
  }
  ngOnInit(): void {}

  clickScroll(ID: string) {
    if (!isNull(document.getElementById(ID))) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      let margin = this.layout.headerHeight as string;
      margin = margin.replace('px', '');
      let topToY =
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        document.getElementById(ID)!.getBoundingClientRect().top +
        window.pageYOffset -
        Number(margin) +
        2;
      topToY = topToY < 0 ? 0 : topToY;
      window.scrollTo({ top: topToY, behavior: 'smooth' });
    }
  }
  toZeroAndZero() {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.body.scrollIntoView({ behavior: 'smooth' });
  }
}
interface iSideProject {
  name: string;
  link?: string;
}
