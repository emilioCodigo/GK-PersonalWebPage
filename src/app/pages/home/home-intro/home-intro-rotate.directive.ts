import { Directive, ElementRef, Renderer2 } from '@angular/core'
import anime from 'animejs'

@Directive({
    selector: '[appHomeIntroRotate]',
})
export class HomeIntroRotateDirective {
    constructor(private el: ElementRef, private r2: Renderer2) {
        this.r2.addClass(this.el.nativeElement, '_anime-rotate')
        setTimeout(() => {
            anime({
                rotate: () => {
                    return [0, anime.random(-3, 3)]
                },
                targets: '._anime-rotate',
                direction: 'normal',
                // direction: 'alternate',
                duration: 1500,
                delay: 1500,
                // loop: true,
            })
        }, 100)
    }
}
