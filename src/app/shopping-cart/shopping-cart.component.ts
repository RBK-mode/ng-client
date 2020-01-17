import { Component, OnInit, Input } from '@angular/core';
import { FoodsDataService } from '../foods-data.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  @Input()
  items: any = [];
  // tslint:disable-next-line:ban-types
  totalOrder: Number = 0;
  // tslint:disable-next-line:ban-types
  totalPrice: Number = 0;
  quantityByFood: object;
  constructor(private fd: FoodsDataService) {}

  ngOnInit() {
    this.totalOrder = this.fd.totalOrder;
    this.totalPrice = this.fd.totalPrice;
    this.items = _.uniq(this.fd.selectedFood);
    this.quantityByFood = this.fd.quantityByFood;
  }
  onPurshase() {
    console.log('test purshase');
  }
}
