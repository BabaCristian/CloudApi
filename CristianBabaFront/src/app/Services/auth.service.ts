import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as auth0 from 'auth0-js';
import { filter } from 'rxjs/operators';

@Injectable()
export class AuthService {

  private _idToken: string;
  private _accessToken: string;
  private _expiresAt: number;

  auth0 = new auth0.WebAuth({
    clientID: 'mnQd3xH3PWxnCPUPRrzr2WjW4oGkl9k9',
    domain: 'dev-fn0rj0-k.eu.auth0.com',
    responseType: 'token id_token',
    redirectUri: 'http://localhost:4200/',
    audience: 'https://dev-fn0rj0-k.eu.auth0.com/api/v2/',
    scope: 'openid'
  });
  

  constructor(public router: Router) {
    this._idToken = '';
    this._accessToken = '';
    this._expiresAt = 0;
  }

  get accessToken(): string {
    return this._accessToken;
  }

  get idToken(): string {
    return this._idToken;
  }

  public login(): void {
    this.auth0.authorize();
  }

public handleAuthentication(): void {
  this.auth0.parseHash((err, authResult) => {
    if (authResult && authResult.accessToken && authResult.idToken) {
      window.location.hash = '';
      this.localLogin(authResult);
      this.router.navigate(['/login']);
    } else if (err) {
      this.router.navigate(['/login']);
      console.log(err);
    }
  });
}

private localLogin(authResult): void {
  // Set the time that the Access Token will expire at
  const expiresAt = (authResult.expiresIn * 1000) + Date.now();
  this._accessToken = authResult.accessToken;
  this._idToken = authResult.idToken;
  this._expiresAt = expiresAt;
}

public renewTokens(): void {
  this.auth0.checkSession({}, (err, authResult) => {
    if (authResult && authResult.accessToken && authResult.idToken) {
      this.localLogin(authResult);
    } else if (err) {
      alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
      this.logout();
    }
  });
}

public logout(): void {
  // Remove tokens and expiry time
  localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    this.router.navigate(['/login']);

  this.auth0.logout({
    returnTo: window.location.origin
  });
}

public isAuthenticated(): boolean {
  // Check whether the current time is past the
  // access token's expiry time
  const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
  return this._accessToken && Date.now() < this._expiresAt;
}

}