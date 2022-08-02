import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentButtonRedComponent } from './content-button-red/content-button-red.component';
import { ContentButtonYellowComponent } from './content-button-yellow/content-button-yellow.component';
import { ContentButtonGreenComponent } from './content-button-green/content-button-green.component';

@NgModule({
  declarations: [
    ContentButtonRedComponent,
    ContentButtonYellowComponent,
    ContentButtonGreenComponent,
  ],
  imports: [CommonModule],
  exports: [
    ContentButtonRedComponent,
    ContentButtonYellowComponent,
    ContentButtonGreenComponent,
  ],
})
export class ContentButtonModule {}
