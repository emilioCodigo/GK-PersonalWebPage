import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from './../../shared/shared.module'
import { HomeAboutComponent } from './home-about/home-about.component'
import { HomeFooterComponent } from './home-footer/home-footer.component'
import { HomeHeaderComponent } from './home-header/home-header.component'
import { HomeIntroComponent } from './home-intro/home-intro.component'
import { HomeMainComponent } from './home-main/home-main.component'
import { HomeSkillComponent } from './home-skill/home-skill.component'
const routes: Routes = [{ path: '', component: HomeMainComponent }]
@NgModule({
    declarations: [
        HomeMainComponent,
        HomeHeaderComponent,
        HomeFooterComponent,
        HomeAboutComponent,
        HomeSkillComponent,
        HomeIntroComponent,
    ],
    imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeModule {}
