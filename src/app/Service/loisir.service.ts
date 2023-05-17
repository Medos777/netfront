import { Injectable } from '@angular/core';
import {Categorie} from "../Model/categorie";
import {FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Observable, switchMap} from "rxjs";
import {Loisir} from "../Model/loisir";

@Injectable({
  providedIn: 'root'
})
export class LoisirService {
  private baseUrl = 'https://localhost:7004/api';
  choixmenu : string  = 'A'; list : Loisir[];
  constructor(private http: HttpClient) {
    this.list = [];
  }

  getAllCategories(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(`${this.baseUrl}/categories`);
  }

  getCategorieById(id: number): Observable<Categorie> {
    return this.http.get<Categorie>(`${this.baseUrl}/categories/${id}`);
  }
  getAll(): Observable<any> {

    return this.http.get(`${this.baseUrl}/loisirs`);
  }

  addLoisir(loisir: any): Observable<Loisir> {
    return this.http.post<any>(`${this.baseUrl}/loisirs`, loisir);
  }

}
