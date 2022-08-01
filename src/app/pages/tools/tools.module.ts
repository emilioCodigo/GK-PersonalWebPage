import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';
import { ToolsMainComponent } from './tools-main/tools-main.component';
import { ToolsHeaderComponent } from './tools-header/tools-header.component';
import { ToolsAsideComponent } from './tools-aside/tools-aside.component';
import { ToolsJsonToInterfaceComponent } from './tools-json-to-interface/tools-json-to-interface.component';

const routes: Routes = [{ path: '', component: ToolsMainComponent }];

@NgModule({
  declarations: [ToolsMainComponent, ToolsHeaderComponent, ToolsAsideComponent, ToolsJsonToInterfaceComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class ToolsModule {}
