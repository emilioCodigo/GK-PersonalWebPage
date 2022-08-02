/* eslint-disable @typescript-eslint/no-this-alias */
import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import anime from 'animejs';
import { Subject } from 'rxjs';

@Directive({
  selector: '[appHomeFooterGreen]',
})
export class HomeFooterGreenDirective implements OnInit {
  colorArray = ['bug', 'bug'];
  // colorArray = [[ColorEnum['steamBg'], ColorEnum['steamDeepBlue']]]
  isDoing = false;
  leaveEventQueue: Array<() => void> = [];
  finalPoint = '100vw';
  // 父滑鼠移動事件輸入
  lastMousePercent = this.finalPoint;
  _mousePercent = this.finalPoint;
  get mousePercent() {
    return this._mousePercent;
  }
  @Input('mousePercent') set mousePercent(val: string) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    if (!this.isMouseAnimeEnable) return;
    if (val === '離開') {
      // 離開特效佇列 未淨空 就離開
      if (this.leaveEventQueue.length > 0) return;
      const LeaveEvent = () => {
        this.isDoing = true;
        setTimeout(() => {
          anime({
            width: function () {
              return [self.lastMousePercent, self.finalPoint];
            },
            targets: '._anime-footer-green',
            direction: 'normal',
            duration: 1000,
            easing: 'linear',
          }).finished.then(() => {
            this.isDoing = false;
            this.leaveEventQueue.shift();
            this.lastMousePercent = this.finalPoint;
          });
        }, 0);
      };
      // 動畫正在忙 丟入離開特效佇列
      // 動畫不忙 直接執行動畫
      if (this.isDoing) {
        this.leaveEventQueue.push(LeaveEvent);
      } else {
        LeaveEvent();
      }
    } else {
      if (this.isDoing) return;
      this.isDoing = true;
      setTimeout(() => {
        this._mousePercent = val;

        anime({
          width: function () {
            return [self.lastMousePercent, self.mousePercent];
          },
          targets: '._anime-footer-green',
          direction: 'normal',
          duration: 1000,
          easing: 'linear',
        }).finished.then(() => {
          // 如果 尚有離開動畫 執行動畫
          // 沒有動畫 直接設定 動畫套件狀態 閒置中
          if (this.leaveEventQueue.length > 0) {
            this.leaveEventQueue[0]();
          } else {
            this.isDoing = false;
          }
          this.lastMousePercent = this.mousePercent;
        });
      }, 0);
    }
  }

  // wow動畫結束事件
  isMouseAnimeEnable = false;
  animeStream$ = new Subject();
  @HostListener('animationend', ['$event']) onAnimationEnd(
    evt: AnimationEvent
  ) {
    if (evt.elapsedTime > 0 && evt.animationName === 'fadeIn') {
      this.animeStream$.next('next');
    }
  }

  constructor(private el: ElementRef, private r2: Renderer2) {
    this.animeStream$.asObservable().subscribe(() => {
      this.r2.addClass(this.el.nativeElement, '_anime-footer-green');
      this.isDoing = true;
      setTimeout(() => {
        const self = this;
        anime({
          width: function () {
            return ['0vw', self.finalPoint];
          },
          targets: '._anime-footer-green',
          direction: 'normal',
          duration: 1500,
          easing: 'linear',
        }).finished.then(() => {
          this.isMouseAnimeEnable = true;
          // 如果 尚有離開動畫 執行動畫
          // 沒有動畫 直接設定 動畫套件狀態 閒置中
          if (this.leaveEventQueue.length > 0) {
            this.leaveEventQueue[0]();
          } else {
            this.isDoing = false;
          }
          this.lastMousePercent = this.finalPoint;
        });
      }, 0);
    });
  }

  ngOnInit(): void {}
}
