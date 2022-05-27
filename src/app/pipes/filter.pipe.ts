import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,  serachTerm: any): any {
    return value.filter(function(search: any){
      return search.status.toLowerCase().indexOf(serachTerm.toLowerCase()) > -1
    }) ;
  }


  
}
