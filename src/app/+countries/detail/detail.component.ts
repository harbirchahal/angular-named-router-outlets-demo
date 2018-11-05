import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../country';

@Component({
  selector: 'country-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() country: Country;

  constructor() { }

  get bgImageFlag() {
    return {
      'background-image': `url("${this.country.flag}")`,
      'background-size': 'cover'
    };
  }

  ngOnInit() {
  }

}