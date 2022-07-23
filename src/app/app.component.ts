/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, inject, OnInit } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { environment } from 'environments/environment'
import { distinctUntilChanged } from 'rxjs'
declare let gtag: Function
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    router = inject(Router)
    versionNumber = environment.appVersion
    ngOnInit(): void {
        this.checkCurrentPath()
    }
    checkCurrentPath() {
        this.router.events
            .pipe(
                distinctUntilChanged((prev: any, current) => {
                    if (current instanceof NavigationEnd) {
                        return prev.url === current.url
                    }
                    return true
                })
            )
            .subscribe((x: any) => {
                gtag('event', 'page_view', { page_path: x.url })
            })
    }
}
