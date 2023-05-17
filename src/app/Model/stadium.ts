import {Categorie} from "./categorie";

export class Stadium {
  id?: number;
  name?: string;
  emplacement?: string;
  available?: boolean;
  categorieId?: number;
  categorie: Categorie| null;

  constructor() {
    this.categorie = null; // Initialize categorie as null
  }
}
