import { AfterViewInit, Component, ContentChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-button-box',
  templateUrl: './content-button-box.component.html',
  styleUrls: ['./content-button-box.component.scss'],
})
export class ContentButtonBoxComponent implements OnInit, AfterViewInit {
  @ContentChild('header') header: any;
  @ContentChild('body') body: any;
  constructor() {}
  ngAfterViewInit(): void {
    console.log(this.header);
    console.log(this.body);
  }

  ngOnInit(): void {}
}
