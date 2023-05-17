import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../Model/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'api/user';

  constructor(private http: HttpClient) { }

  register(user: User): Observable<any> {
    const url = `${this.apiUrl}/register`;
    return this.http.post(url, user);
  }

  login(user: User): Observable<any> {
    const url = `${this.apiUrl}/login`;
    return this.http.post(url, user);
  }
}
