import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { iSteamGameInfo } from '@app/model/steamGame.model'
import * as $ from 'jquery'
import KeenSlider, { KeenSliderInstance, KeenSliderPlugin } from 'keen-slider'
import { DUMMY_steamData } from './../../../constant/dummy/steam.data'
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
function MutationPlugin(slider: KeenSliderInstance): KeenSliderPlugin {
    return (slider) => {
        console.log('hi')
        const observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                slider.update()
            })
        })
        const config = { childList: true }

        slider.on('created', () => {
            observer.observe(slider.container, config)
        })
        slider.on('destroyed', () => {
            observer.disconnect()
        })
    }
}
@Component({
    selector: 'app-product-main',
    templateUrl: './product-main.component.html',
    styleUrls: ['./product-main.component.scss'],
})
export class ProductMainComponent implements OnInit {
    num = 6
    ngOnInit(): void {
        this.focusGame = DUMMY_steamData[this.num]
    }
    DUMMY_steamData = DUMMY_steamData
    private _focusGame!: iSteamGameInfo | null
    get focusGame(): iSteamGameInfo | null {
        return this._focusGame
    }
    set focusGame(value: iSteamGameInfo | null) {
        this.isLoad = false
        this._focusGame = value
        this.isLoad = true
    }
    @ViewChild('sliderRef') sliderRef!: ElementRef<HTMLElement>
    @ViewChild('thumbnailRef') thumbnailRef!: ElementRef<HTMLElement>
    isLoad = false
    slider!: KeenSliderInstance
    thumbnailSlider!: KeenSliderInstance

    ngAfterViewInit() {
        this.updateKeen()
        this.slider.options.slides = { perView: 1 }
    }
    add() {
        // this.slider.destroy()
        this.num++

        this.focusGame = DUMMY_steamData[this.num]
        this.updateKeen()
    }
    updateKeen = () => {
        this.slider = new KeenSlider(this.sliderRef.nativeElement, { slides: { perView: 1 } })
        this.thumbnailSlider = new KeenSlider(this.thumbnailRef.nativeElement, {}, [
            ThumbnailPlugin(this.slider),
            MutationPlugin(this.slider),
        ])
        this.slider.update()
    }

    ngOnDestroy() {
        if (this.slider) this.slider.destroy()
        if (this.thumbnailSlider) this.thumbnailSlider.destroy()
    }
}
