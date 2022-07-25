import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core'
import anime from 'animejs'

@Directive({
    selector: '[appHomeIntroLinkIconHover]',
})
export class HomeIntroLinkIconHoverDirective {
    @HostListener('mouseenter') onMouseEnter = () => {
        this.r2.addClass(this.el.nativeElement, 'homeLinkIconHoverClass')
        anime({
            rotate: function () {
                return [0, 10]
            },
            targets: '.homeLinkIconHoverClass',
            direction: 'alternate',
            duration: 600,
        })
    }
    @HostListener('mouseleave') onMouseLeave = () => {
        this.r2.removeClass(this.el.nativeElement, 'homeLinkIconHoverClass')
    }
    constructor(private el: ElementRef, private r2: Renderer2) {}
}
