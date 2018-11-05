import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { DetailComponent } from './detail/detail.component';
import { CountryFilterPipe } from './country-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    ListComponent,
    ItemComponent,
    DetailComponent,
    CountryFilterPipe
  ],
  exports: [
    ListComponent,
    ItemComponent,
    DetailComponent
  ],
  providers: []
})
export class CountriesModule { }
