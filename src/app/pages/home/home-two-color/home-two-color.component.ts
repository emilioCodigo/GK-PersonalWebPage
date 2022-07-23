import { Component, Input, OnInit } from '@angular/core'
import { iHomeLayout } from '@app/model/layout.model'

@Component({
    selector: 'app-home-two-color',
    templateUrl: './home-two-color.component.html',
    styleUrls: ['./home-two-color.component.scss'],
})
export class HomeTwoColorComponent implements OnInit {
    @Input() layout!: iHomeLayout
    constructor() {}

    ngOnInit(): void {}
}
