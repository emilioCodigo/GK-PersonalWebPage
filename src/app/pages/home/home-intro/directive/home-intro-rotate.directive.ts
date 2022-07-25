import { Directive, ElementRef, HostListener, OnDestroy, Renderer2 } from '@angular/core'
import anime from 'animejs'
import { Subject, take } from 'rxjs'

@Directive({
    selector: '[appHomeIntroRotate]',
})
export class HomeIntroRotateDirective {
    counter = 0
    eventStream$ = new Subject()
    @HostListener('animationend') onAniEnd() {
        this.eventStream$.next('next')
    }
    constructor(private el: ElementRef, private r2: Renderer2) {
        this.eventStream$
            .asObservable()
            .pipe(take(2))
            .subscribe(() => {
                this.counter++
                if (this.counter == 2) {
                    this.r2.addClass(this.el.nativeElement, '_anime-rotate')
                    setTimeout(() => {
                        anime({
                            rotate: () => {
                                return [0, anime.random(-5, 5)]
                            },
                            targets: '._anime-rotate',
                            direction: 'normal',
                            // direction: 'alternate',
                            duration: 1500,
                            // autoplay: false,
                            // loop: true,
                        })
                        this.r2.removeClass(this.el.nativeElement, '_anime-rotate')
                    }, 100)
                    this.eventStream$.complete()
                }
            })
    }
}
