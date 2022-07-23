import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { NgPipesModule } from 'ngx-pipes'
import { ContentModule } from './content/content.module'
import { DirectivesModule } from './directives/directives.module'
import { MatModule } from './mat.module'
import { PipeModule } from './pipe/pipe.module'
@NgModule({
    declarations: [],
    imports: [MatModule, PipeModule, ContentModule, NgPipesModule, DirectivesModule, CommonModule],
    exports: [MatModule, PipeModule, ContentModule, DirectivesModule, NgPipesModule],
})
export class SharedModule {}
