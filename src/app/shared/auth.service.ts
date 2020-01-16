import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public register(userData: any): Observable<any> {
    return this.http.post('http://localhost:8000/api/user/', userData);
  }
}