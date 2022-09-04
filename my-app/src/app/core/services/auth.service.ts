import { BehaviorSubject, delay, Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { routesString } from '../routes';

type LoginData = { email: string; password: string };

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLogged$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private _username: string;
  private readonly _validEmail = 'master@lemoncode.net';
  private readonly _validPassword = '12345678';

  constructor(private _router: Router) {
    this.setAuthData();
  }

  login(loginData: LoginData): void {
    const { email, password } = loginData;

    if (email === this._validEmail && password === this._validPassword) {
      this._username = email;
      this._isLogged$.next(true);
      this.saveAuthDataInLocalstorage();
    } else {
      this._username = '';
      this._isLogged$.next(false);
    }
  }

  logout(): void {
    this._username = '';
    this._isLogged$.next(false);
    this.saveAuthDataInLocalstorage();
  }

  get isLogged(): Observable<boolean> {
    return this._isLogged$.asObservable().pipe(delay(2000));
  }

  get username(): Observable<string> {
    return of(this._username);
  }

  private saveAuthDataInLocalstorage(): void {
    localStorage.setItem('isLogged', `${this._isLogged$.getValue() ? 1 : 0}`);
    localStorage.setItem('username', this._username);
  }

  private setAuthData(): void {
    const isLoggedLocalstorage = Boolean(
      Number(localStorage.getItem('isLogged'))
    );
    const usernameLocalstorage = localStorage.getItem('username');

    this._isLogged$.next(isLoggedLocalstorage);
    this._username = usernameLocalstorage ?? '';

    if (isLoggedLocalstorage && usernameLocalstorage) {
      this._router.navigateByUrl(`/${routesString.dashboard}`);
    }
  }
}
