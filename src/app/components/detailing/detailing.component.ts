import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, map, switchMap } from 'rxjs/operators';
import { Country, CountryReducer } from '../../+countries';

@Component({
  selector: 'app-detailing',
  templateUrl: './detailing.component.html',
  styleUrls: ['./detailing.component.css']
})
export class DetailingComponent implements OnInit {
  country$: Observable<Country>;

  constructor(
    private route: ActivatedRoute,
    private countryReducer: CountryReducer
  ) {
    this.country$ = this.route.params.pipe(
      map(params => params['name']),
      switchMap(this.countryReducer.country$)
    );
  }

  ngOnInit() {
  }

}