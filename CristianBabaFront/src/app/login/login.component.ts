import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService) {
    auth.handleAuthentication();
   }

  ngOnInit() {
    if (this.auth.isAuthenticated()) {
      this.auth.renewTokens();
  }
  }
}



//