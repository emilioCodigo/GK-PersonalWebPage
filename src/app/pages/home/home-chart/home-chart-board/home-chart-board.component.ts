import { iSteamGameInfo } from '@app/model/steamGame.model'
import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core'
import KeenSlider, { KeenSliderInstance, KeenSliderPlugin } from 'keen-slider'
import * as $ from 'jquery'
function ThumbnailPlugin(main: KeenSliderInstance): KeenSliderPlugin {
    return (slider) => {
        function removeActive() {
            slider.slides.forEach((slide) => {
                slide.classList.remove('active')
            })
        }
        function addActive(idx: number) {
            slider.slides[idx].classList.add('active')
        }

        function addClickEvents() {
            slider.slides.forEach((slide, idx) => {
                slide.addEventListener('click', () => {
                    main.moveToIdx(idx)
                })
            })
        }

        slider.on('created', () => {
            addActive(slider.track.details.rel)
            addClickEvents()
            main.on('animationStarted', (main) => {
                removeActive()
                const next = main.animator.targetIdx || 0
                addActive(main.track.absToRel(next))
                slider.moveToIdx(next)
            })
        })
    }
}
@Component({
    selector: 'app-home-chart-board',
    templateUrl: './home-chart-board.component.html',
    styleUrls: ['./home-chart-board.component.scss'],
})
export class HomeChartBoardComponent implements OnInit {
    ngOnInit(): void {
        console.log(this.focusGame)
    }

    private _focusGame!: iSteamGameInfo
    @Input() get focusGame(): iSteamGameInfo {
        return this._focusGame
    }
    set focusGame(value: iSteamGameInfo) {
        if (this.slider) {
            this.slider.update()
        }
        if (this.thumbnailSlider) {
            this.thumbnailSlider.update()
        }
        this._focusGame = value
    }
    @ViewChild('sliderRef') sliderRef!: ElementRef<HTMLElement>
    @ViewChild('thumbnailRef') thumbnailRef!: ElementRef<HTMLElement>

    slider!: KeenSliderInstance
    thumbnailSlider!: KeenSliderInstance

    ngAfterViewInit() {
        this.slider = new KeenSlider(this.sliderRef.nativeElement)
        this.thumbnailSlider = new KeenSlider(
            this.thumbnailRef.nativeElement,
            {
                updated: () => {
                    console.log('updated')
                },
                animationEnded: () => {
                    console.log('animationEnded')
                },
                created: () => {
                    console.log('created')
                },
                destroyed: () => {
                    console.log('destroyed')
                },
                detailsChanged: () => {
                    console.log('detailsChanged')
                },
                beforeOptionsChanged: () => {
                    console.log('beforeOptionsChanged')
                },
                optionsChanged: () => {
                    console.log('optionsChanged')
                },
                slideChanged: () => {
                    console.log('slideChanged')
                },

                initial: 0,
                slides: {
                    perView: Math.floor($('.__right')[0].scrollWidth / 115),
                },
                breakpoints: {
                    '(max-width: 762px)': {
                        slides: { perView: 4, spacing: 5 },
                    },
                    '(max-width: 576px)': {
                        slides: { perView: 3, spacing: 5 },
                    },
                    '(max-width: 430px)': {
                        slides: { perView: 2, spacing: 5 },
                    },
                },
            },
            [ThumbnailPlugin(this.slider)]
        )
    }

    ngOnDestroy() {
        if (this.slider) this.slider.destroy()
        if (this.thumbnailSlider) this.thumbnailSlider.destroy()
    }
}
