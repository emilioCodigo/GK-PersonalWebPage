import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from './../../shared/shared.module'
import { HomeFooterComponent } from './home-footer/home-footer.component'
import { HomeHeaderComponent } from './home-header/home-header.component'
import { HomeIntroLinkIconHoverDirective } from './home-intro/home-intro-link-icon-hover.directive'
import { HomeIntroSwiperHoverDirective } from './home-intro/home-intro-swiper-hover.directive'
import { HomeIntroComponent } from './home-intro/home-intro.component'
import { HomeMainComponent } from './home-main/home-main.component'
import { HomeTwoColorComponent } from './home-two-color/home-two-color.component';
import { HomeChartComponent } from './home-chart/home-chart.component'
const routes: Routes = [{ path: '', component: HomeMainComponent }]
@NgModule({
    declarations: [
        HomeMainComponent,
        HomeHeaderComponent,
        HomeFooterComponent,

        HomeIntroComponent,
        HomeTwoColorComponent,
        HomeIntroSwiperHoverDirective,
        HomeIntroLinkIconHoverDirective,
        HomeChartComponent,
    ],
    imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeModule {}
