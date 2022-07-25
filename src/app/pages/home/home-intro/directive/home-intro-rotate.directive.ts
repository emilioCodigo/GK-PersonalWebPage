import { Directive, ElementRef, HostListener, Input, OnDestroy, Renderer2 } from '@angular/core'
import anime from 'animejs'
import { Subject, take } from 'rxjs'

@Directive({
    selector: '[appHomeIntroRotate]',
})
export class HomeIntroRotateDirective {
    @Input() rotateValue = 0
    counter = 0
    eventStream$ = new Subject()
    @HostListener('animationend', ['$event']) onAniEnd(evt: AnimationEvent) {
        if (evt.elapsedTime > 0) {
            this.eventStream$.next('next')
        }
    }
    constructor(private el: ElementRef, private r2: Renderer2) {
        this.eventStream$
            .asObservable()
            .pipe(take(2))
            .subscribe(() => {
                this.counter++

                this.r2.addClass(this.el.nativeElement, '_anime-rotate' + this.rotateValue)
                setTimeout(() => {
                    anime({
                        rotate: () => {
                            return [0, this.rotateValue]
                        },
                        targets: '._anime-rotate' + this.rotateValue,
                        direction: 'normal',
                        // direction: 'alternate',
                        duration: 1500,
                        // autoplay: false,
                        // loop: true,
                    }).finished.then(() => {
                        this.r2.removeClass(
                            this.el.nativeElement,
                            '_anime-rotate' + this.rotateValue
                        )
                    })
                }, 0)
            })
    }
}
