import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadSpinnerService } from 'src/app/core/services/load-spinner.service';

@Component({
  selector: 'app-load-spinner',
  templateUrl: './load-spinner.component.html',
  styleUrls: ['./load-spinner.component.scss'],
})
export class LoadSpinnerComponent implements OnInit {
  showSpinner$: Observable<boolean>;

  constructor(private _loadSpinnerService: LoadSpinnerService) {}

  ngOnInit(): void {
    this.showSpinner$ = this._loadSpinnerService.isLoading$;
  }
}
