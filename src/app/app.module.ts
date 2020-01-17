import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { ItemsComponent } from "./items/items.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
import { CheckOutComponent } from "./check-out/check-out.component";
import { MyOrdersComponent } from "./my-orders/my-orders.component";
import { AdminItemsComponent } from "./admin/admin-items/admin-items.component";
import { AdminOrdersComponent } from "./admin/admin-orders/admin-orders.component";
import { OrderSuccessComponent } from "./order-success/order-success.component";
import { LoginComponent } from "./login/login.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SignupComponent } from "./signup/signup.component";
import { FoodCardComponent } from "./food-card/food-card.component";
import { FoodsDataService } from "./foods-data.service";
import { HttpClientModule } from "@angular/common/http";
import { FooterComponent } from "./footer/footer.component";
import { NgbdCarouselBasic } from "./carousel-basic/carousel-basic.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ItemsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    MyOrdersComponent,
    AdminItemsComponent,
    AdminOrdersComponent,
    OrderSuccessComponent,
    LoginComponent,
    SignupComponent,
    FoodCardComponent,
    FooterComponent,
    NgbdCarouselBasic
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "items", component: ItemsComponent },
      { path: "shopping-cart", component: ShoppingCartComponent },
      { path: "check-out", component: CheckOutComponent },
      { path: "order-success", component: OrderSuccessComponent },
      { path: "my/orders", component: MyOrdersComponent },
      { path: "admin/items", component: AdminItemsComponent },
      { path: "admin/orders", component: AdminOrdersComponent },
      { path: "login", component: LoginComponent },
      { path: "register", component: SignupComponent }
    ]),
    NgbModule
  ],
  providers: [FoodsDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
