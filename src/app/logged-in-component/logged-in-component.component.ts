import { FirebaseService } from './../services/firebase.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'logged-in-view',
  templateUrl: './logged-in-component.component.html',
  styleUrls: ['./logged-in-component.component.scss']
})
export class LoggedInComponentComponent implements OnInit {

  constructor(public fireBaseService: FirebaseService) { }

  @Output() isLogout = new EventEmitter<void>();

  user = localStorage.getItem("user");


  ngOnInit(): void {
  }

  logout() {
    this.fireBaseService.logout();
    this.isLogout.emit();
    document.location.reload(true);
    alert("loggedOut!");
  }

}
