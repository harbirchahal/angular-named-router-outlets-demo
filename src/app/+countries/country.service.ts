import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { Country } from './country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll$ = (): Observable<Country[]> => {
    return this.httpClient.get<Country[]>('assets/data.json').pipe(
      map(countries => countries.sort((c1, c2) => c1.name.localeCompare(c2.name))),
      map(countries => {
        countries.forEach(c => {
          c._lookup = c.name.toLowerCase();
        });
        return countries;
      })
    );
  }
}