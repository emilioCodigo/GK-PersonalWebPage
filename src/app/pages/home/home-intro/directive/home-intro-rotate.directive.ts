import {
    Directive,
    ElementRef,
    HostListener,
    Input,
    OnDestroy,
    OnInit,
    Renderer2,
} from '@angular/core'
import anime from 'animejs'
import { Subject, take } from 'rxjs'

@Directive({
    selector: '[appHomeIntroRotate]',
})
export class HomeIntroRotateDirective implements OnInit {
    @Input() rotateValue = 0
    constructor(private el: ElementRef, private r2: Renderer2) {}
    ngOnInit(): void {
        this.initAnimation()
    }
    initAnimation() {
        this.r2.addClass(this.el.nativeElement, '_anime-rotate' + this.rotateValue)
        setTimeout(() => {
            anime({
                rotate: () => {
                    return [0, -10]
                },
                targets: '._anime-rotate' + this.rotateValue,
                direction: 'normal',
                duration: 4000,
                easing: 'linear',
            }).finished.then(() => {
                anime({
                    rotate: () => {
                        return [-10, this.rotateValue]
                    },
                    targets: '._anime-rotate' + this.rotateValue,
                    direction: 'alternate',
                    duration: 8000,
                    easing: 'linear',
                    loop: true,
                }).finished.then(() => {
                    this.r2.removeClass(this.el.nativeElement, '_anime-rotate' + this.rotateValue)
                })
            })
        }, 0)
    }
}
