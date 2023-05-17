import { Injectable } from '@angular/core';
import {Loisir} from "../Model/loisir";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Categorie} from "../Model/categorie";
import {Stade} from "../Model/stade";

@Injectable({
  providedIn: 'root'
})
export class StadeService {
  private baseUrl = 'https://localhost:7004/api';
  choixmenu : string  = 'A'; list : Stade[];
  constructor(private http: HttpClient) {
    this.list = [];
  }

  getAllLoisirs(): Observable<Loisir[]> {
    return this.http.get<Loisir[]>(`${this.baseUrl}/loisirs`);
  }

  getLoisirById(id: number): Observable<Loisir> {
    return this.http.get<Loisir>(`${this.baseUrl}/loisirs/${id}`);
  }
  getAll(): Observable<any> {

    return this.http.get(`${this.baseUrl}/stadiums`);
  }

  addStade(stade: any): Observable<Stade> {
    return this.http.post<any>(`${this.baseUrl}/stadiums`, stade);
  }

}
