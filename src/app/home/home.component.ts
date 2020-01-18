import { Component, OnInit, Input } from "@angular/core";
import { FoodsDataService } from "../foods-data.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  allFoods: any = [];
  constructor(private foodService: FoodsDataService) {}
  ngOnInit() {
    this.foodService.getFoods().subscribe(data => {
      console.log(data);
      this.allFoods = data;
    });
  }
  test() {
    console.log(this.allFoods);
  }
}
