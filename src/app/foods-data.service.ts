import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class FoodsDataService {
  apiUrl = "http://localhost:8000/api/item";
  constructor(private http: HttpClient) {}
  getFoods() {
    return this.http.get(this.apiUrl);
  }
}
