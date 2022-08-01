import { Inject } from '@angular/core';
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { APP_INITIALIZER, InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'environments/environment';
import { NgwWowModule } from 'ngx-wow';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
export function onInit() {
  return null;
}
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};
export const EnvironmentToken = new InjectionToken('ENVIRONMENT');
declare let gtag: Function;
@NgModule({
  declarations: [AppComponent],
  imports: [
    PerfectScrollbarModule,
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
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(@Inject(EnvironmentToken) private env: any) {
    gtag('config', env.google.GA_TRACKING_ID);
  }
}
