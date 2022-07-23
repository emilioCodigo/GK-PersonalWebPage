import anime from 'animejs'
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core'

@Directive({
    selector: '[appHeaderIntroWowItem]',
})
export class HeaderIntroWowItemDirective {
    @HostListener('mouseenter') onMouseEnter = () => {}
    @HostListener('mouseleave') onMouseLeave = () => {
        // anime({
        //     borderRadius: 0,
        //     targets: '._anime-header-hover-item',
        //     direction: 'alternate',
        //     duration: 5000,
        //     loop: true,
        // })
        // this.r2.removeClass(this.el.nativeElement, '_anime-header-hover-item')
    }
    constructor(private el: ElementRef, private r2: Renderer2) {
        this.r2.addClass(this.el.nativeElement, '_anime-header-hover-item')
        anime({
            borderRadius: function () {
                return ['50%', '5%']
            },
            targets: '._anime-header-hover-item',
            direction: 'alternate',
            duration: 1000,
            loop: true,
        })
    }
}
