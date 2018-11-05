import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Country } from '../country';

@Component({
  selector: 'country-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() country: Country;
  @Input() letClose: boolean;
  @Output() close = new EventEmitter();

  constructor() { }

  get bgImageFlag() {
    return {
      'background-image': `url("${this.country.flag}")`,
      'background-size': 'cover'
    };
  }

  ngOnInit() {
  }

  onClose() {
    this.close.next();
  }

}