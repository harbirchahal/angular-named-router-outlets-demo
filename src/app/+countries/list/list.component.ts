import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Country } from '../country';

@Component({
  selector: 'country-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() countries: Country[];
  @Output() select = new EventEmitter<Country>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(country) {
    this.select.emit(country);
  }

}