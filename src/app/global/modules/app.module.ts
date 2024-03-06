import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './routing.module';
import { AppComponent } from '../app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorStateMatcher } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { CustomErrorStateMatcher } from '../configs';
import { AppPrivateModule } from 'src/app/private/modules/private.module';
import { AppPublicModule } from 'src/app/public/public.module';
import { AppGlobalModule } from './global.module';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppGlobalModule,
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: CustomErrorStateMatcher},
    {provide: LOCALE_ID, useValue: 'pt'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
