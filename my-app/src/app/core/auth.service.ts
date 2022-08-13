import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private $isLogged: BehaviorSubject<boolean>;

  constructor() {
    this.$isLogged = new BehaviorSubject(false);
  }

  login(): void {
    this.$isLogged.next(true);
  }

  logout(): void {
    this.$isLogged.next(false);
  }

  get isLogged() {
    return this.$isLogged;
  }
}
