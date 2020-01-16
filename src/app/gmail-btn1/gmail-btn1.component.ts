import { Component, OnInit } from '@angular/core';
declare const gapi: any;

@Component({
  selector: 'app-gmail-btn1',
  templateUrl: './gmail-btn1.component.html',
  styleUrls: ['./gmail-btn1.component.scss']
})
export class GmailBtn1Component implements OnInit {

  constructor() { }

  ngOnInit() {
    this.btnRender();
  }

  btnRender() {
    const options = {
      scope: 'email',
      width: 250,
      height: 50,
      longtitle: true,
      theme: 'dark',
      onsuccess: this.attachSignin,
    }
    gapi.signin2.render('googleBtn', options)
  }

  public attachSignin(googleUser) {
    let profile = googleUser.getBasicProfile();
    console.log('Token || ' + googleUser.getAuthResponse().id_token);
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
  }

}