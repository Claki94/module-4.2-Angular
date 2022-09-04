import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormErrorsComponent } from './form-errors/form-errors.component';
import { LoadSpinnerComponent } from './load-spinner/load-spinner.component';

@NgModule({
  declarations: [FormErrorsComponent, LoadSpinnerComponent],
  imports: [CommonModule, AngularMaterialModule],
  exports: [
    FormErrorsComponent,
    AngularMaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    LoadSpinnerComponent,
  ],
})
export class SharedModule {}
