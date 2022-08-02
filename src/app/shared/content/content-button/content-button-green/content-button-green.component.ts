import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-content-button-green',
  templateUrl: './content-button-green.component.html',
  styleUrls: ['./content-button-green.component.scss'],
})
export class ContentButtonGreenComponent implements OnInit {
  @Output() clickEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  onClick($event: any) {
    this.clickEvent.emit($event);
  }
}
