import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs';

import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user;
  public isAuthed = !!JSON.parse(localStorage.getItem('currentUser'));
  @Output() getIsAuthed: EventEmitter<any> = new EventEmitter();


  constructor(private http: HttpClient) {
    console.log(this.isAuthed);
    this.getIsAuthed.emit(this.isAuthed);
  }

  public register(userData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/user/`, userData);
  }

  public login(userData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/user/login`, userData).pipe(
      map((res: any) => {
        console.log(res);
        this.user = res.user;
        return this.saveTokenAndCurrentUser(res.token);
      })
    );
  }

  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    this.isAuthed = false;
    this.getIsAuthed.emit(this.isAuthed);

  }

  private saveTokenAndCurrentUser(token: string): string {
     localStorage.setItem('token', token);
     localStorage.setItem('currentUser', JSON.stringify(this.user));
     this.isAuthenticated().subscribe((res) => {
      console.log(res);
    });
     return token;
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public isAuthenticated(): any {
    return this.http.get(`${environment.apiUrl}/user/me`, {
      headers: new HttpHeaders({auth: localStorage.getItem('token') || ''})
    }).pipe(
      map((user: any) => {
          this.isAuthed = user._id === JSON.parse(localStorage.getItem('currentUser'))._id;
          this.getIsAuthed.emit(this.isAuthed);
          return this.isAuthed;
      })
    );
  }

  public getCurrentUserName(): string {
    return JSON.parse(localStorage.getItem('currentUser')).name;
  }
}
