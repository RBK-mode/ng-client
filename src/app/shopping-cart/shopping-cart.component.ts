import { Component, OnInit, Input } from "@angular/core";
import { FoodsDataService } from "../foods-data.service";
import * as _ from "underscore";

@Component({
  selector: "app-shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  styleUrls: ["./shopping-cart.component.css"]
})
export class ShoppingCartComponent implements OnInit {
  items: any = [];
  totalOrder: Number = 0;
  totalPrice: Number = 0;
  quantityByFood: Object;
  constructor(private fd: FoodsDataService) {}

  ngOnInit() {
    this.items = [];
    this.totalPrice = this.fd.totalPrice;
    this.items = _.uniq(this.fd.selectedFood, "_id");
    this.totalOrder = this.fd.selectedFood.length;
    this.quantityByFood = this.fd.quantityByFood;
    console.log("from shop carte", this.fd.selectedFood);
  }
  onPurshase() {
    console.log("test purshase");
  }
  incButton(el, id) {
    this.fd.totalPrice += el.price;
    this.quantityByFood[id] += 1;
    this.fd.selectedFood.push(el);
    this.ngOnInit();
  }
  decButtton(el, id) {
    this.fd.totalPrice -= el.price;
    this.quantityByFood[id] -= 1;
    this.fd.selectedFood.pop();
    this.ngOnInit();
  }
}
