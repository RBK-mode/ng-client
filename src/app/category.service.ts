import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Subject } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class CategoryService {
  searchElement: any;
  A = new Subject<any>();
  B = this.A.asObservable();

  apiUrl = "http://localhost:8000/api/category";
  constructor(private http: HttpClient) {}
  getCategory() {
    return this.http.get(this.apiUrl);
  }
}
