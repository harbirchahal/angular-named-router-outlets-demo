import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CountryService } from './country.service';
import { CountryReducer } from './country.reducer';

@Injectable({
  providedIn: 'root'
})
export class CountryEffects {

  constructor(
    private service: CountryService,
    private reducer: CountryReducer
  ) { }

  load(): void {
    this.service.getAll$().subscribe(
      result => {
        this.reducer.state = result;
      },
      console.error
    );
  }

}