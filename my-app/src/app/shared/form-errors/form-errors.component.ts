import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-errors',
  templateUrl: './form-errors.component.html',
  styleUrls: ['./form-errors.component.scss'],
})
export class FormErrorsComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() field: string;

  constructor() {
    this.formGroup = new FormGroup({});
    this.field = '';
  }

  ngOnInit(): void {}
}
