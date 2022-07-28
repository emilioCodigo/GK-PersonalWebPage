import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from '@app/shared/shared.module'
import { ProductMainComponent } from './product-main/product-main.component'

const routes: Routes = [{ path: '', component: ProductMainComponent }]

@NgModule({
    declarations: [ProductMainComponent],
    imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class ProductModule {}
