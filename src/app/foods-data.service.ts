import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class FoodsDataService {
  selectedFood: any = [];
  quantityByFood: Object = {};
  totalOrder: Number = 0;
  totalPrice: Number = 0;
  apiUrl = "http://localhost:8000/api/item";
  constructor(private http: HttpClient) {}
  getFoods() {
    return this.http.get(this.apiUrl);
  }
  addTocard(orderItem, id) {
    if (this.quantityByFood[id]) {
      this.quantityByFood[id] += 1;
    } else {
      this.quantityByFood[id] = 1;
    }
    this.selectedFood.push(orderItem);
    this.totalPrice += orderItem.price;
    this.totalOrder = this.selectedFood.length;
  }
}
