import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core'
import anime from 'animejs'
import { Subject, take } from 'rxjs'
import { ColorEnum } from './../../../../constant/enum/color.enum'

@Directive({
    selector: '[appHomeFooterGreen]',
})
export class HomeFooterGreenDirective implements OnInit {
    colorArray = [['#f00', ColorEnum['orange']]]
    isDoing = false
    leaveEventQueue: Array<() => void> = []

    // 父滑鼠移動事件輸入
    lastMousePercent = '50vw'
    _mousePercent = '50vw'
    get mousePercent() {
        return this._mousePercent
    }
    @Input('mousePercent') set mousePercent(val: string) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const self = this
        if (!this.isMouseAnimeEnable) return
        if (val === '離開') {
            // 離開特效佇列 未淨空 就離開
            if (this.leaveEventQueue.length > 0) return
            const LeaveEvent = () => {
                this.isDoing = true
                setTimeout(() => {
                    anime({
                        backgroundColor: this.colorArray,
                        width: function () {
                            return [self.lastMousePercent, '50vw']
                        },
                        targets: '._anime-footer-green',
                        direction: 'normal',
                        duration: 1000,
                        easing: 'linear',
                    }).finished.then(() => {
                        this.isDoing = false
                        this.leaveEventQueue.shift()
                        self.lastMousePercent = '50vw'
                    })
                }, 0)
            }
            // 動畫正在忙 丟入離開特效佇列
            // 動畫不忙 直接執行動畫
            if (this.isDoing) {
                this.leaveEventQueue.push(LeaveEvent)
            } else {
                LeaveEvent()
            }
        } else {
            if (this.isDoing) return
            this.isDoing = true
            setTimeout(() => {
                this._mousePercent = val
                anime({
                    backgroundColor: this.colorArray,
                    width: function () {
                        return [self.lastMousePercent, self.mousePercent]
                    },
                    targets: '._anime-footer-green',
                    direction: 'normal',
                    duration: 1000,
                    easing: 'linear',
                }).finished.then(() => {
                    // 如果 尚有離開動畫 執行動畫
                    // 沒有動畫 直接設定 動畫套件狀態 閒置中
                    if (this.leaveEventQueue.length > 0) {
                        this.leaveEventQueue[0]()
                    } else {
                        this.isDoing = false
                    }
                    self.lastMousePercent = self.mousePercent
                })
            }, 0)
        }
    }

    // wow動畫結束事件
    counter = 0
    isMouseAnimeEnable = false
    animeStream$ = new Subject()
    @HostListener('animationend', ['$event']) onAnimationEnd(evt: AnimationEvent) {
        if (evt.elapsedTime > 0 && evt.animationName === 'fadeIn') {
            this.animeStream$.next('next')
        }
    }

    constructor(private el: ElementRef, private r2: Renderer2) {
        this.animeStream$
            .asObservable()

            .subscribe(() => {
                this.counter++

                this.r2.addClass(this.el.nativeElement, '_anime-footer-green')
                this.isDoing = true
                setTimeout(() => {
                    anime({
                        backgroundColor: this.colorArray,
                        width: function () {
                            return ['0vw', '50vw']
                        },
                        targets: '._anime-footer-green',
                        direction: 'normal',
                        duration: 1500,
                        easing: 'linear',
                    }).finished.then(() => {
                        this.isMouseAnimeEnable = true
                        // 如果 尚有離開動畫 執行動畫
                        // 沒有動畫 直接設定 動畫套件狀態 閒置中
                        if (this.leaveEventQueue.length > 0) {
                            this.leaveEventQueue[0]()
                        } else {
                            this.isDoing = false
                        }
                        this.lastMousePercent = '50vw'
                    })
                }, 0)
            })
    }
    ngOnInit(): void {}
}
