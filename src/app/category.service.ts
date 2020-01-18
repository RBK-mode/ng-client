import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class CategoryService {
  apiUrl = "http://localhost:8000/api/category";
  constructor(private http: HttpClient) {}
  getCategory() {
    return this.http.get(this.apiUrl);
  }
}
