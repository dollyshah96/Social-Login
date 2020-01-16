import { Component, OnInit, AfterViewInit } from '@angular/core';
declare const gapi: any;

@Component({
  selector: 'app-gmail-btn3',
  templateUrl: './gmail-btn3.component.html',
  styleUrls: ['./gmail-btn3.component.scss']
})
export class GmailBtn3Component implements AfterViewInit {
  public auth2: any;
  constructor() { }

  ngAfterViewInit() {
    this.googleInit();
  }

  public googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '388209318719-cm2ck8s8oh7nseiar25dc80lt5teuoee.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email',
      });
      this.attachSignin(document.getElementById('googleBtn'));
    });
  }

  public attachSignin(element) {
    this.auth2.attachClickHandler(element, {},
      (googleUser) => {
        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());

      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }
}
