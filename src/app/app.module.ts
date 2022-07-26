import { Inject } from '@angular/core'
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { APP_INITIALIZER, InjectionToken, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { environment } from 'environments/environment'
import { NgwWowModule } from 'ngx-wow'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { SharedModule } from './shared/shared.module'
import { HttpClientModule } from '@angular/common/http'
import { NgxSpinnerModule } from 'ngx-spinner'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
export function onInit() {
    return null
}
export const EnvironmentToken = new InjectionToken('ENVIRONMENT')
declare let gtag: Function
@NgModule({
    declarations: [AppComponent],
    imports: [
        NgwWowModule,
        SharedModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        NgxSpinnerModule.forRoot({ type: 'triangle-skew-spin' }),
    ],
    providers: [
        { provide: APP_INITIALIZER, useFactory: onInit },
        { provide: EnvironmentToken, useValue: environment },
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent],
})
export class AppModule {
    constructor(@Inject(EnvironmentToken) private env: any) {
        gtag('config', env.google.GA_TRACKING_ID)
    }
}
