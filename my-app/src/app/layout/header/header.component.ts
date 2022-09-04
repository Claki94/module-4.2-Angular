import { Subscription } from 'rxjs';
import { AuthService, routesString } from 'src/app/core';
import { Routes } from 'src/app/models/routes.model';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoadSpinnerService } from 'src/app/core/services/load-spinner.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  routes: Routes[];
  isLogged: boolean;
  username: string;

  private readonly _publicRoutes: Routes[] = [
    { path: `/${routesString.home}`, name: 'home' },
    { path: `/${routesString.login}`, name: 'login' },
    { path: `/${routesString.aboutUs}`, name: 'about us' },
  ];

  private readonly _privateRoutes: Routes[] = [
    { path: `/${routesString.dashboard}`, name: 'dashboard' },
    { path: `/${routesString.gallery}`, name: 'gallery' },
    { path: `/${routesString.crud}`, name: 'crud' },
    { path: `/${routesString.profile}`, name: 'profile' },
  ];

  private _subscriptions: Subscription[];

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _snackBar: MatSnackBar,
    private _loadSpinnerService: LoadSpinnerService
  ) {
    this.createMenuLinks(false);
    this._subscriptions = [];
  }

  ngOnInit(): void {
    this.subscribeToIsLogged();
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach((sub) => sub.unsubscribe());
  }

  logout(): void {
    this._loadSpinnerService.setIsLoading$(true);
    this._authService.logout();
  }

  private createMenuLinks(isLogged: boolean): void {
    this.routes = isLogged ? this._privateRoutes : this._publicRoutes;
  }

  private subscribeToIsLogged(): void {
    const sub = this._authService.isLogged.subscribe((value) => {
      this._loadSpinnerService.setIsLoading$(false);
      this.createMenuLinks(value);

      if (this.isLogged && !value) {
        this._router.navigateByUrl(`/${routesString.home}`);
        this._snackBar.open('You have logged out succesfully', 'Close');
      }

      this.isLogged = value;
      this.setUsername();
    });

    this._subscriptions.push(sub);
  }

  private setUsername(): void {
    this._authService.username.subscribe((value) => (this.username = value));
  }
}
