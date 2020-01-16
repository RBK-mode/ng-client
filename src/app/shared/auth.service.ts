import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public register(userData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/user/`, userData);
  }

  public login(userData: any): Observable<any> {
    console.log(userData);
    return this.http.post(`${environment.apiUrl}/user/login`, userData).pipe(
      map((res: any) => {
        return this.saveToken(res.token);
      })
    );
  }

  private saveToken(token: string): string {
    localStorage.setItem('token', token);
    return token;
  }
}
