import { Subject, take } from 'rxjs'
import { ColorEnum } from './../../../../constant/enum/color.enum'
import {
    AfterViewInit,
    Directive,
    ElementRef,
    HostListener,
    Input,
    OnInit,
    Renderer2,
} from '@angular/core'
import anime from 'animejs'

@Directive({
    selector: '[appHomeFooterGreen]',
})
export class HomeFooterGreenDirective implements OnInit {
    lastMousePercent = '100%'
    _mousePercent = '100%'
    get mousePercent() {
        return this._mousePercent
    }
    @Input('mousePercent') set mousePercent(val: string) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const self = this
        this.lastMousePercent = this.mousePercent
        this._mousePercent = val
        if (!this.isMouseAnimeEnable) return
        if (val === '離開') {
            console.log(self.mousePercent)
            setTimeout(() => {
                anime({
                    backgroundColor: ColorEnum['orange'],
                    width: function () {
                        return [self.lastMousePercent, '100vw']
                    },
                    targets: '._anime-footer-green',
                    direction: 'normal',
                    duration: 1000,
                    easing: 'linear',
                })
            }, 0)
            return
        }
        this.r2.setStyle(this.el.nativeElement, 'width', this.mousePercent)
    }

    counter = 0
    isMouseAnimeEnable = false
    animeStream$ = new Subject()
    @HostListener('animationend', ['$event']) onAnimationEnd(evt: AnimationEvent) {
        if (evt.animationName === 'fadeIn') {
            this.animeStream$.next('next')
        }
    }

    constructor(private el: ElementRef, private r2: Renderer2) {
        this.animeStream$
            .asObservable()
            .pipe(take(2))
            .subscribe(() => {
                this.counter++
                if (this.counter === 2) {
                    this.r2.addClass(this.el.nativeElement, '_anime-footer-green')
                    setTimeout(() => {
                        anime({
                            backgroundColor: ColorEnum['orange'],
                            width: function () {
                                return ['0vw', '100vw']
                            },
                            targets: '._anime-footer-green',
                            direction: 'normal',
                            duration: 3000,
                            easing: 'linear',
                        })
                        this.animeStream$.complete()
                        this.isMouseAnimeEnable = true
                    }, 0)
                }
            })
    }
    ngOnInit(): void {}
}
