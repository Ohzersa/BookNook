import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args: any): any {

    if (args === '' || args.length < 3) {
      return value;
    }
    
    const resultCategorie: any = [];
    
    for(const categorie of value) {
      if (categorie.volumeInfo.categories && categorie.volumeInfo.categories[0].toLowerCase().indexOf(args.toLowerCase()) > -1) {
        resultCategorie.push(categorie)
      }
    }
    return resultCategorie;
  }

}