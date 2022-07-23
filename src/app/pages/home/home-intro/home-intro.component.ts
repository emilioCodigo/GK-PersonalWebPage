import { NgwWowService } from 'ngx-wow'
import { Component, OnInit, inject } from '@angular/core'

@Component({
    selector: 'app-home-intro',
    templateUrl: './home-intro.component.html',
    styleUrls: ['./home-intro.component.scss'],
})
export class HomeIntroComponent implements OnInit {
    constructor() {
        inject(NgwWowService).init()
    }

    ngOnInit(): void {}
}
