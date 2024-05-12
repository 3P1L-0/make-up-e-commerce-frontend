import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './routing.module';
import {AppComponent} from '../app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {registerLocaleData} from '@angular/common';
import localePt from '@angular/common/locales/pt';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AppPrimeNgModule} from "./primeng.module";
import {MessageService} from "primeng/api";

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    AppPrimeNgModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'},
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
