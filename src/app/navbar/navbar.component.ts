import { Component, OnInit } from "@angular/core";
import { AuthService } from "../shared/auth.service";
import { Router } from "@angular/router";
import { FoodsDataService } from "../foods-data.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  isAuthed: boolean = !!JSON.parse(localStorage.getItem("currentUser"));
  counter: Number = 0;
  constructor(
    private auth: AuthService,
    private router: Router,
    private fd: FoodsDataService
  ) {
    auth.getIsAuthed.subscribe(authState => {
      this.isAuthed = authState;
    });
  }

  ngOnInit() {
    console.log(this.isAuthed);
  }

  logout() {
    this.auth.logout();
    this.router.navigate(["/login"]);
  }
}
