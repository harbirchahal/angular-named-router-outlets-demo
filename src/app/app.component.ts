import { Component, OnInit } from '@angular/core';
import { CountryEffects } from './+countries';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private countryEffects: CountryEffects
  ) { }

  ngOnInit() {
    this.countryEffects.load();
  }

}