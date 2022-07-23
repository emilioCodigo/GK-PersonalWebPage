import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'

@NgModule({
    declarations: [],
    imports: [CommonModule, BsDropdownModule.forRoot()],
    exports: [BsDropdownModule],
})
export class MatModule {}
