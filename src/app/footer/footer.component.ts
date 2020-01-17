import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  arr = new Array(5);
  constructor() {}

  ngOnInit() {
    console.log(this.arr);
  }
}
