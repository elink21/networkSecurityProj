import { FirebaseService } from './../services/firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent implements OnInit {

  constructor(public fireBaseService: FirebaseService) { }

  isSignedIn = false;


  ngOnInit(): void {
    if (localStorage.getItem('user') != null)
      this.isSignedIn = true
    else
      this.isSignedIn = false;
  }


  async onSignUp(email: string, password: string) {
    await this.fireBaseService.signup(email, password);
    if (this.fireBaseService.isLoggedIn) {
      this.isSignedIn = true;

    }
  }

  async onSignIn(email: string, password: string) {
    await this.fireBaseService.signin(email, password);
    if (this.fireBaseService.isLoggedIn) {
      this.isSignedIn = true;
    }
  }

  handleLogout()
  {
    this.isSignedIn=false;
  }


}
