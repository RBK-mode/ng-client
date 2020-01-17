import { Component, OnInit } from "@angular/core";
import { FoodsDataService } from "../foods-data.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  counter: Number = 0;
  constructor(private fd: FoodsDataService) {}
  //set counter on navbar
  ngOnInit() {
    //console.log("init navBar", this.fd.selectedFood.length);
  }
}
