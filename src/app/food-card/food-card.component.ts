import { Component, OnInit, Input } from '@angular/core';
import { FoodsDataService } from '../foods-data.service';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.css']
})
export class FoodCardComponent implements OnInit {
  constructor(private foodsData: FoodsDataService) {}
  @Input() foodsDetails;
  selectedFoods = [];
  ngOnInit() {
<<<<<<< HEAD
    console.log("from food-card", this.foodsData.selectedFood);
    /*     console.log(" qte", this.foodsData.quantityByFood);
    console.log(" qte order", this.foodsData.totalOrder);
    console.log(" total price", this.foodsData.totalPrice); */
  }
  onClick(id) {
    this.foodsData.addTocard(this.foodsDetails, id);
    //console.log("test click ", id);
=======
    this.foodsDetails.q = 1;
    console.log('cart', this.foodsData.selectedFood);
    console.log(' qte', this.foodsData.quantityByFood);
    console.log(' qte order', this.foodsData.totalOrder);
    console.log(' total price', this.foodsData.totalPrice);
  }
  onClick(id) {
    this.foodsData.addTocard(this.foodsDetails, id);
    console.log('test click ', id);
>>>>>>> 98b84e4c803d221741fc5fea8871e15897254de0
  }
}
