import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { iSteamGameInfo } from '@app/model/steamGame.model';
import KeenSlider, { KeenSliderInstance, KeenSliderPlugin } from 'keen-slider';

function ThumbnailPlugin(main: KeenSliderInstance): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove('active');
      });
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add('active');
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener('click', () => {
          main.moveToIdx(idx);
        });
      });
    }

    slider.on('created', () => {
      addActive(slider.track.details.rel);
      addClickEvents();
      main.on('animationStarted', (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(next);
      });
    });
  };
}
function MutationPlugin(): KeenSliderPlugin {
  return (slider) => {
    const observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        slider.update();
      });
    });
    const config = { childList: true };

    slider.on('created', () => {
      observer.observe(slider.container, config);
    });
    slider.on('destroyed', () => {
      observer.disconnect();
    });
  };
}
@Component({
  selector: 'app-home-chart-keen',
  templateUrl: './home-chart-keen.component.html',
  styleUrls: ['./home-chart-keen.component.scss'],
})
export class HomeChartKeenComponent implements OnInit {
  focusGame!: iSteamGameInfo;
  constructor() {}
  ngOnInit(): void {}
  @ViewChild('sliderRef') sliderRef!: ElementRef<HTMLElement>;
  @ViewChild('thumbnailRef') thumbnailRef!: ElementRef<HTMLElement>;
  slider!: KeenSliderInstance;
  thumbnailSlider!: KeenSliderInstance;

  ngAfterViewInit() {
    this.updateKeen();
  }
  updateKeen = () => {
    // const right = $('.__right')[0];

    const right = document.querySelector('.__right');
    const defaultPreviewNum = right ? Math.floor(right.scrollWidth / 115) : 1;
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {}, [
      MutationPlugin(),
    ]);
    this.thumbnailSlider = new KeenSlider(
      this.thumbnailRef.nativeElement,
      {
        renderMode: 'performance',
        initial: 0,
        slides: { spacing: 4, perView: defaultPreviewNum },
        breakpoints: {
          '(max-width: 762px)': {
            slides: { perView: 4, spacing: 4 },
          },
          '(max-width: 476px)': {
            slides: { perView: 3, spacing: 4 },
          },
          '(max-width: 430px)': {
            slides: { perView: 2, spacing: 4 },
          },
        },
      },
      [ThumbnailPlugin(this.slider)]
    );
  };

  ngOnDestroy() {
    if (this.slider) this.slider.destroy();
    if (this.thumbnailSlider) this.thumbnailSlider.destroy();
  }
}
