import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { NgChartsModule } from 'ng2-charts'
import { DragScrollModule } from 'ngx-drag-scroll'
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar'
import { NgPipesModule } from 'ngx-pipes'
import { NgxSpinnerModule } from 'ngx-spinner'
import { SwiperModule } from 'swiper/angular'
import { ContentModule } from './content/content.module'
import { DirectivesModule } from './directives/directives.module'
import { MatModule } from './mat.module'
import { PipeModule } from './pipe/pipe.module'
import { NgxGalleryModule } from '@kolkov/ngx-gallery'
@NgModule({
    declarations: [],
    imports: [CommonModule],
    exports: [
        NgxGalleryModule,
        DragScrollModule,
        PerfectScrollbarModule,
        NgxSpinnerModule,
        NgChartsModule,
        SwiperModule,
        MatModule,
        PipeModule,
        ContentModule,
        DirectivesModule,
        NgPipesModule,
    ],
})
export class SharedModule {}
