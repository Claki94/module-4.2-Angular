import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadSpinnerService {
  private _isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {}

  get isLoading$(): Observable<boolean> {
    return this._isLoading$.asObservable();
  }

  setIsLoading$(value: boolean): void {
    this._isLoading$.next(value);
  }
}
