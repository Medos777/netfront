import { Injectable } from '@angular/core';
import {Categorie} from "../Model/categorie";
import {FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private baseUrl = 'https://localhost:7004/api/categories';
  choixmenu : string  = 'A'; list : Categorie[];
  public dataForm:  FormGroup;
  constructor(private http: HttpClient) {
    this.dataForm = new FormGroup({});
    this.list = [];
  }
  getAll(): Observable<any> {

    return this.http.get(`${this.baseUrl}`);
  }
  deleteData(id: number): Observable<any> {

    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  createData(info: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, info);
  }
}
