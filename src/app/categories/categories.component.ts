import { Component, OnInit } from "@angular/core";
import { CategoryService } from "../category.service";
import { FoodsDataService } from "../foods-data.service";
import { Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.css"]
})
export class CategoriesComponent implements OnInit {
  categories: any = [];
  @Output() private demo = new EventEmitter();
  constructor(private cat: CategoryService, private fd: FoodsDataService) {}

  ngOnInit() {
    this.cat.getCategory().subscribe(data => {
      this.categories = data;
    });
  }
  reRenderHome(el, event) {
    console.log(event);
    event.preventDefault();
    console.log("test");
    this.cat.A.next(el);
  }
}
