import { Component, OnInit } from "@angular/core";
import { CategoryService } from "../category.service";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.css"]
})
export class CategoriesComponent implements OnInit {
  categories: any = [];
  constructor(private cat: CategoryService) {}

  ngOnInit() {
    console.log("ttttttttt");

    this.cat.getCategory().subscribe(data => {
      this.categories = data;
      console.log(data);
    });

    console.log(this.categories);
  }
}
