import { iSteamGameInfo } from '@app/model/steamGame.model'
import * as $ from 'jquery'
import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core'
import KeenSlider, { KeenSliderInstance, KeenSliderPlugin } from 'keen-slider'

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
    @Input() focusGame!: iSteamGameInfo
    ngOnInit(): void {}
    @ViewChild('sliderRef') sliderRef!: ElementRef<HTMLElement>
    @ViewChild('thumbnailRef') thumbnailRef!: ElementRef<HTMLElement>

    slider!: KeenSliderInstance
    thumbnailSlider!: KeenSliderInstance

    ngAfterViewInit() {
        this.slider = new KeenSlider(this.sliderRef.nativeElement)
        this.thumbnailSlider = new KeenSlider(
            this.thumbnailRef.nativeElement,
            {
                initial: 0,
                slides: {
                    perView: 'auto',
                    spacing: 0,
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
