import { Pipe, PipeTransform } from '@angular/core';
import { Country } from './country';

@Pipe({
  name: 'filter'
})
export class CountryFilterPipe implements PipeTransform {

  transform(countries: Country[], searchText: string): Country[] {
    if (!searchText) {
      return countries;
    }
    return countries.filter(c => c._lookup.includes(searchText));
  }

}