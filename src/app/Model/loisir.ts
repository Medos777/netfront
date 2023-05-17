import {Categorie} from "./categorie";

export class Loisir {
  id?: number;
  nom?: string;
  categorieId?: number;
  categorie: Categorie| null;

  constructor() {
    this.categorie = null; // Initialize categorie as null
  }
}
