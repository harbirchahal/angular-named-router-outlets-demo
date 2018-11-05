import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Country } from './country';

@Injectable({
  providedIn: 'root'
})
export class CountryReducer {
  private _state: BehaviorSubject<Country[]>;
  private state$: Observable<Country[]>;

  constructor() {
    this._state = new BehaviorSubject<Country[]>([]);
    this.state$ = this._state.asObservable();
  }

  set state(newState) {
    this._state.next(newState);
  }

  countries$ = (): Observable<Country[]> => {
    return this.state$;
  }

  country$ = (name): Observable<Country> => {
    return this.state$.pipe(
      map(countries => countries.find(c => c.name === name))
    );
  }

}