import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContentButtonModule } from './content-button/content-button.module';
import { ContentButtonBoxComponent } from './content-button-box/content-button-box.component';

@NgModule({
  declarations: [ContentButtonBoxComponent],
  imports: [CommonModule],
  exports: [ContentButtonModule, ContentButtonBoxComponent],
})
export class ContentModule {}
