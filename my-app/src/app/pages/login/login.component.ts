import { Subscription } from 'rxjs';
import { AuthService, routesString } from 'src/app/core';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoadSpinnerComponent } from 'src/app/shared/load-spinner/load-spinner.component';
import { LoadSpinnerService } from 'src/app/core/services/load-spinner.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;

  private _subscriptions: Subscription[];

  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _router: Router,
    private _snackBar: MatSnackBar,
    private _loadSpinnerService: LoadSpinnerService
  ) {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });

    this._subscriptions = [];
  }

  ngOnInit(): void {
    this.subscribeToIsLogged();
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach((sub) => sub.unsubscribe());
  }

  login(): void {
    this._loadSpinnerService.setIsLoading$(true);
    this._authService.login(this.loginForm.value);
  }

  private subscribeToIsLogged(): void {
    const sub = this._authService.isLogged.subscribe((isLogged) => {
      if (isLogged) {
        this._router.navigateByUrl(`/${routesString.dashboard}`);
      } else if (!isLogged && this.loginForm.valid) {
        this._snackBar.open(
          'The email and/or password are invalid. Check your credentials and try again.',
          'Close'
        );
      }
    });

    this._subscriptions.push(sub);
  }
}
