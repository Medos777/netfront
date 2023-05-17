import {Loisir} from "./loisir";

export interface Stade {
  id?: number;
  name: string;
  emplacement: string;
  available: boolean;
  loisirId: number;
  loisir: Loisir;
}
