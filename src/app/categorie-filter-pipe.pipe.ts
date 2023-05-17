import { Pipe, PipeTransform } from '@angular/core';
import {Categorie} from "./Model/categorie";

@Pipe({
  name: 'categorieFilterPipe'
})
export class CategorieFilterPipePipe implements PipeTransform {


  transform(categories: Categorie[], searchText: string): Categorie[] {
    if (!categories) {
      return [];
    }
    if (!searchText) {
      return categories;
    }
    searchText = searchText.toUpperCase();
    return categories.filter(categorie => {
      return categorie.nom.toUpperCase().includes(searchText);
    });
  }


}
