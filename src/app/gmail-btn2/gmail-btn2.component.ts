import { Component, OnInit, AfterViewInit } from '@angular/core';
declare const gapi: any;

@Component({
  selector: 'app-gmail-btn2',
  templateUrl: './gmail-btn2.component.html',
  styleUrls: ['./gmail-btn2.component.scss']
})
export class GmailBtn2Component implements OnInit, AfterViewInit {
  public auth2: any;
  constructor() { }

  ngOnInit() {
  }

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
    });
  }

  public attachSignin() {
    this.auth2.signIn().then((result) => {
      console.log('object :', result);
      console.log(result.getId());
      let profile = result.getBasicProfile();
      console.log('Token || ' + result.getAuthResponse().id_token);
      console.log('ID: ' + profile.getId());
      console.log('Name: ' + profile.getName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail());
    }).catch((err) => {

    });
  }

  getInfo() {
    const data = this.auth2.currentUser.get();
    const basicProfile = data.getBasicProfile();
    console.log('Token || ' + data.getAuthResponse().id_token);
    console.log('ID: ' + basicProfile.getId());
    console.log('Name: ' + basicProfile.getName());
    console.log('Image URL: ' + basicProfile.getImageUrl());
    console.log('Email: ' + basicProfile.getEmail());
  }
}
