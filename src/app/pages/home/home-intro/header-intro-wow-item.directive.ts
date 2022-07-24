import anime from 'animejs'
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core'

@Directive({
    selector: '[appHeaderIntroWowItem]',
})
export class HeaderIntroWowItemDirective {
    @HostListener('mouseenter') onMouseEnter = () => {
        this.r2.addClass(this.el.nativeElement, '_hover_change_item_color')
    }
    @HostListener('mouseleave') onMouseLeave = () => {
        this.r2.removeClass(this.el.nativeElement, '_hover_change_item_color')
    }
    constructor(private el: ElementRef, private r2: Renderer2) {
        this.r2.addClass(this.el.nativeElement, '_anime-header-hover-item')
        anime({
            // borderRadius: function () {
            //     return ['50%', '5%']
            // },
            rotate: function () {
                return [1, 0]
            },
            targets: '._anime-header-hover-item',
            direction: 'alternate',
            duration: 450,
            loop: true,
        })
    }
}
