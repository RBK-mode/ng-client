import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import * as _ from "underscore";
import { LocationService } from "./location.service";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class FoodsDataService {
  selectedFood: any = [];
  quantityByFood: Object = {};
  totalOrder: Number = 0;
  totalPrice: any = 0;
  apiUrl = "http://localhost:8000/api/item";
  apiUrlOrder = "http://localhost:8000/api/order";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    })
  };
  constructor(private http: HttpClient, private loc: LocationService) {}
  //retrevie data
  getFoods(element) {
    console.log(element);
    if (!element) {
      return this.http.get(this.apiUrl);
    } else {
      console.log("2");
      return this.http.post(
        `${this.apiUrl}`,
        JSON.stringify(element),
        this.httpOptions
      );
    }
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

  resetData() {
    this.selectedFood = [];
    this.quantityByFood = {};
    this.totalOrder = 0;
    this.totalPrice = 0;
  }
  orderObj: Object = {};
  async postOrder(obj) {
    //to respect the schema of database
    let list = _.uniq(this.selectedFood, "_id");
    for (let i = 0; i < list.length; i++) {
      for (let key in this.quantityByFood) {
        if (list[i]["_id"] === key) {
          list[i]["quantity"] = this.quantityByFood[key];
        }
      }
    }
    this.orderObj["deliveredAt"] = obj.phone;
    this.orderObj["location"] = {};
    this.orderObj["items_list"] = list;
    this.orderObj["customerId"] = JSON.parse(
      localStorage.getItem("currentUser")
    )._id;
    let position: any = await this.loc.getPosition().then(pos => {
      return pos;
    });
    this.orderObj["location"].latitude = position.lat;
    this.orderObj["location"].longitude = position.lng;

    this.http
      .post(this.apiUrlOrder, JSON.stringify(this.orderObj), this.httpOptions)
      .subscribe();
  }
}
