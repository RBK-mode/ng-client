import { Component, OnInit, Input } from "@angular/core";
import { FoodsDataService } from "../foods-data.service";
import * as _ from "underscore";

@Component({
  selector: "app-shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  styleUrls: ["./shopping-cart.component.css"]
})
export class ShoppingCartComponent implements OnInit {
  @Input()
  items: any = [];
  totalOrder: Number = 0;
  totalPrice: Number = 0;
  quantityByFood: Object;
  constructor(private fd: FoodsDataService) {}

  ngOnInit() {
    this.totalOrder = this.fd.totalOrder;
    this.totalPrice = this.fd.totalPrice;
    this.items = _.uniq(this.fd.selectedFood);
    this.quantityByFood = this.fd.quantityByFood;
  }
  onPurshase() {
    console.log("test purshase");
  }
}
