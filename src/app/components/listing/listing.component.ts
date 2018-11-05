import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Country, CountryReducer } from '../../+countries';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  countries$: Observable<Country[]>;
  showCard = false;

  country1: Country;
  country2: Country;
  private selections: Country[] = [this.country1, this.country2];

  constructor(
    private router: Router,
    private countryReducer: CountryReducer
  ) {
    this.countries$ = this.countryReducer.countries$().pipe(
      tap(countries => this.showCard = !!countries.length)
    );
  }

  ngOnInit() {
  }

  allowSubmit() {
    return this.country1 && this.country2;
  }

  onSelect(country) {
    // Reject duplicates
    if (this.selections.find(c => c && c.name === country.name)) {
      return;
    }
    if (!this.country1) {
      this.country1 = country;
      return;
    }
    if (!this.country2) {
      this.country2 = country;
      return;
    }
  }

  onRemove(country) {
    if (this.country1 && this.country1.name === country.name) {
      this.country1 = null;
      return;
    }
    if (this.country2 && this.country2.name === country.name) {
      this.country2 = null;
      return;
    }
  }

  onSubmit() {
    if (this.allowSubmit()) {
      this.router.navigate(['/compare', {
        outlets: {
          foo: [this.country1.name],
          bar: [this.country2.name],
        }
      }]);
    } else {
      console.error('Able to compare without both selections');
    }
  }

}