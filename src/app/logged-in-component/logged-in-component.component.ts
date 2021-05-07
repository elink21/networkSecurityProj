import { FirebaseService } from './../services/firebase.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from "@angular/forms"

@Component({
  selector: 'logged-in-view',
  templateUrl: './logged-in-component.component.html',
  styleUrls: ['./logged-in-component.component.scss']
})
export class LoggedInComponentComponent implements OnInit {

  constructor(public fireBaseService: FirebaseService) { }

  @Output() isLogout = new EventEmitter<void>();

  user = localStorage.getItem("user");
  captchaString: string;
  dataUnlocked = false;
  enteredString: string;


  ngOnInit(): void {
    const generatedArray = Array.from({ length: 6 }, (x) => {
      return String.fromCharCode(Math.floor(70 + (Math.random() * 15)));
    }).join("");

    this.captchaString = generatedArray;
  }

  logout() {
    this.fireBaseService.logout();
    this.isLogout.emit();
    document.location.reload(true);
    alert("loggedOut!");
  }

  checkMatch() {
    console.log(this.enteredString, this.captchaString);
    if (this.enteredString == this.captchaString) {
      alert("Unlocked");
      this.dataUnlocked = true;
    }
  }

}
