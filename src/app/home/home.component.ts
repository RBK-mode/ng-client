import { Component, OnInit, Input, Output } from "@angular/core";
import { FoodsDataService } from "../foods-data.service";
import { CategoryService } from "../category.service";
import { EventEmitter } from "events";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  allFoods: any = [];
  //@Output() render = new EventEmitter();
  constructor(
    private foodService: FoodsDataService,
    private cat: CategoryService
  ) {}
  //to render all product on home page
  ngOnInit() {
    this.foodService.getFoods(this.cat.searchElement).subscribe(data => {
      console.log(data);
      this.allFoods = data;
    });
    this.cat.B.subscribe(data => {
      console.log(data);
      this.foodService.getFoods(data._id).subscribe(data => {
        console.log(data);
        this.allFoods = data;
      });
    });
  }
}
