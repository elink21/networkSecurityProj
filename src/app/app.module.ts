import { FirebaseService } from './services/firebase.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { LoginViewComponent } from './login-view/login-view.component';
import { LoggedInComponentComponent } from './logged-in-component/logged-in-component.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbButtonModule, NbInputModule } from '@nebular/theme';

@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    LoggedInComponentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxCaptchaModule,
    ReactiveFormsModule,
    FormsModule,
    NbButtonModule,
    NbInputModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCKK7qGiA-6bfPHyJbKsFVFCIF6_6IdlNo",
      authDomain: "securitynetworkproject.firebaseapp.com",
      projectId: "securitynetworkproject",
      storageBucket: "securitynetworkproject.appspot.com",
      messagingSenderId: "535592924632",
      appId: "1:535592924632:web:a7bf1608bbf65ec4f0aead"
    }),
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbEvaIconsModule,

  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent],
  exports: [
    LoginViewComponent,
    LoggedInComponentComponent,

  ]
})
export class AppModule { }
