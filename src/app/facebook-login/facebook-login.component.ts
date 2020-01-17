import { Component, OnInit } from '@angular/core';
declare var FB: any;

@Component({
  selector: 'app-facebook-login',
  templateUrl: './facebook-login.component.html',
  styleUrls: ['./facebook-login.component.scss']
})
export class FacebookLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.fbLibrary();
  }

  fbLibrary() {
    FB.fbAsyncInit = function () {
      FB.init({
        appId: '805050789958340',
        cookie: true,
        xfbml: true,
        version: 'v5.0'
      });
      FB.AppEvents.logPageView();
    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));


    // var success_login = function () {
    //   console.log("submit login to facebook");
    //   FB.login((response) => {
    //     // console.log(response);
    //     if (response.status === 'connected') {
    //       if (response.authResponse) {
    //         FB.api('/me', {
    //           fields: 'last_name, first_name, email , picture , middle_name, name, name_format, short_name, gender, friends, birthday, age_range, posts, likes',
    //         }, (userInfo) => {
    //           console.log(userInfo);
    //         });
    //       }
    //     }
    //     else {
    //       console.log('User login failed');
    //     }
    //   }, { scope: 'public_profile,email, user_gender, user_birthday, user_age_range, user_friends, user_posts, user_likes', return_scopes: true });
    // }

    // FB.Event.subscribe('auth.statusChange', success_login);

  }

  submitLogin() {

    console.log("submit login to facebook");
    FB.login((response) => {
      console.log(response);
      if (response.status === 'connected') {
        if (response.authResponse) {
          FB.api('/me', {
            fields: 'last_name, first_name, email , picture , middle_name, name, name_format, short_name, gender, friends, birthday, age_range, posts, likes',
          }, (userInfo) => {
            console.log(userInfo);
          });

        }
      }
      else {
        console.log('User login failed');
      }
    }, { scope: 'public_profile,email, user_gender, user_birthday, user_age_range, user_friends, user_posts, user_likes', return_scopes: true });

  }
}
