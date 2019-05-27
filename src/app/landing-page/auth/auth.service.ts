import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

const delay = ms => new Promise(res => setTimeout(res, ms));

@Injectable()
export class AuthService {

  private token: string;

  constructor(private router: Router, private helper: JwtHelperService) {

    this.token = localStorage.getItem('access_token');
    helper = new JwtHelperService();
  }

  signupUser(email: string, password: string) {

  }

  async signinUser(email: string, password: string): Promise<boolean> {
    await delay(3000);
    return true;
  }

  logout() {
    this.token = null;
  }

  getToken() {
    return this.helper.decodeToken(this.token);
  }

  isAuthenticated() {
    return this.token != null && !this.helper.isTokenExpired(this.token);
  }
}
