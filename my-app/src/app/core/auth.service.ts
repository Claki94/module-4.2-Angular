import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

type LoginData = { email: string; password: string };

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private $isLogged: BehaviorSubject<boolean>;

  constructor() {
    this.$isLogged = new BehaviorSubject(false);
  }

  login(loginData: LoginData): void {
    const { email, password } = loginData;

    if (email === 'master@lemoncode.net' && password === '12345678') {
      this.$isLogged.next(true);
    } else {
      this.$isLogged.next(false);
    }
  }

  logout(): void {
    this.$isLogged.next(false);
  }

  get isLogged() {
    return this.$isLogged.asObservable();
  }
}
