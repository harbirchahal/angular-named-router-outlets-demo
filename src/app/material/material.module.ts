import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatDividerModule,
  MatListModule
} from '@angular/material';

const modules = [
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatDividerModule,
  MatListModule
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule { }
