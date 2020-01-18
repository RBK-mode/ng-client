import { Component, OnInit } from '@angular/core';
import {OrderService} from '../order.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  orders: any;
  constructor(private service: OrderService) { }

  ngOnInit() {
    this.service.getOrdersByUser()
      .subscribe(orders => {
        console.log(orders);
        this.orders = orders;
      });
  }

}
