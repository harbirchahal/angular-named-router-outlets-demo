import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material';
import { AppRoutingModule } from './app.routes';
import { CountriesModule } from './+countries';
import { AppComponent } from './app.component';
import {
  ListingComponent,
  CompareComponent,
  DetailingComponent
} from './components';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    CountriesModule
  ],
  declarations: [
    AppComponent,
    ListingComponent,
    CompareComponent,
    DetailingComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
