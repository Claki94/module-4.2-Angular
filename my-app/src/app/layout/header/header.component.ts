import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/auth.service';
import { Routes } from 'src/app/models/routes.model';

import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  routes: Routes[];

  private readonly _publicRoutes: Routes[] = [
    { path: '/home', name: 'home' },
    { path: '/login', name: 'login' },
    { path: '/about-us', name: 'about us' },
  ];

  private readonly _privateRoutes: Routes[] = [
    { path: '/dashboard', name: 'dashboard' },
    { path: '/gallery', name: 'gallery' },
    { path: '/crud', name: 'crud' },
    { path: '/profile', name: 'profile' },
  ];

  private _subscriptions: Subscription[];

  constructor(private _authService: AuthService) {
    this.routes = [];
    this._subscriptions = [];
  }

  ngOnInit(): void {
    const sub = this._authService.isLogged.subscribe((value) =>
      this.createMenuLinks(value)
    );

    this._subscriptions.push(sub);
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach((sub) => sub.unsubscribe());
  }

  private createMenuLinks(isLogged: boolean): void {
    this.routes = isLogged ? this._privateRoutes : this._publicRoutes;
  }
}
