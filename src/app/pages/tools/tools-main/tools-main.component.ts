import { Component, OnInit } from '@angular/core';
import { iToolsLayout } from '@app/model/layout.model';
import { ToolsLayoutService } from './../../../service/layout/tools-layout.service';

@Component({
  selector: 'app-tools-main',
  templateUrl: './tools-main.component.html',
  styleUrls: ['./tools-main.component.scss'],
})
export class ToolsMainComponent implements OnInit {
  layout!: iToolsLayout;
  constructor(private toolsLayoutServ: ToolsLayoutService) {
    this.toolsLayoutServ.getToolsLayout$().subscribe((result) => {
      this.layout = result;
    });
  }

  ngOnInit(): void {}
}
