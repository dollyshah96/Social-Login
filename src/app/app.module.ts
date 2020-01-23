import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { GmailBtn1Component } from './gmail-btn1/gmail-btn1.component';
import { GmailBtn2Component } from './gmail-btn2/gmail-btn2.component';
import { AppRoutingModule } from './app-routing.module';
import { GmailBtn3Component } from './gmail-btn3/gmail-btn3.component';
import { FacebookLoginComponent } from './facebook-login/facebook-login.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from "@angular/fire";

@NgModule({
  declarations: [
    AppComponent,
    GmailBtn1Component,
    GmailBtn2Component,
    GmailBtn3Component,
    FacebookLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
