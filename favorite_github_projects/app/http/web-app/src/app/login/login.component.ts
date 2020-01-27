import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private oktaAuth: OktaAuthService, private router: Router) {
  }

  async ngOnInit() {
    const isAuthenticated = await this.oktaAuth.isAuthenticated();
    if (isAuthenticated) {
      this.router.navigate(['/home'], {replaceUrl: true})
    }
  }

  async login(event) {
    event.preventDefault();
    console.log('login event!')
    await this.oktaAuth.loginRedirect('/home');
    // this.router.navigate(['/home'], {replaceUrl: true})
  }
}