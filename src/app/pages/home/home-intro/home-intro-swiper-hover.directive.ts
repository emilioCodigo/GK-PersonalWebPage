import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core'
import anime from 'animejs'

@Directive({
    selector: '[appHomeIntroSwiperHover]',
})
export class HomeIntroSwiperHoverDirective {
    @HostListener('mouseenter') onMouseEnter = () => {
        this.r2.addClass(this.el.nativeElement, '_hover_change_item_color')
    }
    @HostListener('mouseleave') onMouseLeave = () => {
        this.r2.removeClass(this.el.nativeElement, '_hover_change_item_color')
    }
    constructor(private el: ElementRef, private r2: Renderer2) {
        this.r2.addClass(this.el.nativeElement, '_anime-header-hover-item')
        setTimeout(() => {
            anime({
                rotate: function () {
                    return [1, 0]
                },
                targets: '._anime-header-hover-item',
                direction: 'alternate',
                duration: 450,
                loop: true,
            })
        }, 0)
    }
}
