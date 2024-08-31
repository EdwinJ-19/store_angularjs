import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './productlist/product';

@Pipe({
  name: 'searchFilter',
  standalone: true
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: Product[], ...args: any): any {
    // return null;
    // console.log(SearchFilterPipe);

    const search = args[0];

    return value.filter((prod:any)=>{
      return prod.name.toLowerCase().includes(search.toLowerCase());
    })
  }

}
