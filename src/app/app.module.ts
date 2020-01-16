import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { GmailBtn1Component } from './gmail-btn1/gmail-btn1.component';
import { GmailBtn2Component } from './gmail-btn2/gmail-btn2.component';
import { AppRoutingModule } from './app-routing.module';
import { GmailBtn3Component } from './gmail-btn3/gmail-btn3.component';

@NgModule({
  declarations: [
    AppComponent,
    GmailBtn1Component,
    GmailBtn2Component,
    GmailBtn3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
