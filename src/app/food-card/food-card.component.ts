import { Component, OnInit, Input } from "@angular/core";
import { FoodsDataService } from "../foods-data.service";

@Component({
  selector: "app-food-card",
  templateUrl: "./food-card.component.html",
  styleUrls: ["./food-card.component.css"]
})
export class FoodCardComponent implements OnInit {
  constructor(private foodsData: FoodsDataService) {}
  @Input() foodsDetails;
  selectedFoods = [];
  ngOnInit() {
    console.log("from food-card", this.foodsData.selectedFood);
    /*     console.log(" qte", this.foodsData.quantityByFood);
    console.log(" qte order", this.foodsData.totalOrder);
    console.log(" total price", this.foodsData.totalPrice); */
  }
  onClick(id) {
    this.foodsData.addTocard(this.foodsDetails, id);
    //console.log("test click ", id);
  }
}
