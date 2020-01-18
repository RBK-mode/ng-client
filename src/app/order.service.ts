import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient, private userService: UserService) { }

  getOrdersByUser() {
    return this.http.get(`${environment.apiUrl}/order/${this.userService.getUser()}`);
  }
}
