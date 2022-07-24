import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { NgPipesModule } from 'ngx-pipes'
import { ContentModule } from './content/content.module'
import { DirectivesModule } from './directives/directives.module'
import { MatModule } from './mat.module'
import { PipeModule } from './pipe/pipe.module'
import { SwiperModule } from 'swiper/angular'
import { NgChartsModule } from 'ng2-charts'
@NgModule({
    declarations: [],
    imports: [SwiperModule, CommonModule],
    exports: [
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
