import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";


import { ShippingComponent } from "./shipping/shipping.component";
import { CategoriesComponent } from "./categories/categories.component";

import { OrderSuccessComponent } from './order-success/order-success.component';
import { FoodCardComponent } from './food-card/food-card.component';
import { FoodsDataService } from './foods-data.service';
import { FooterComponent } from './footer/footer.component';
import { NgbdCarouselBasic } from './carousel-basic/carousel-basic.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminItemsComponent } from './admin/admin-items/admin-items.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from './signup/signup.component';
import { AuthService } from './shared/auth.service';
import {HttpClientModule} from '@angular/common/http';
import { AuthGuard } from './shared/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './shared/token.interceptor';
import {OrderService} from './order.service';
import {UserService} from './user.service';
import { NgbdSortableHeader, OrdersTable } from './table-sortable-orders/table-sortable.component';
import { NgbdModalBasic } from './basic-modal/basic-modal';
import { NgbdSortableHeader2, ItemsTable } from './table-sortable-items/table-sortable.items.component';


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
    NgbdCarouselBasic,

    ShippingComponent,
    CategoriesComponent

    NgbdSortableHeader,
    OrdersTable,
    NgbdModalBasic,
    NgbdSortableHeader2,
    ItemsTable

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([

      { path: "", component: HomeComponent },
      { path: "items", component: ItemsComponent, canActivate: [AuthGuard] },
      {
        path: "shopping-cart",
        component: ShoppingCartComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "check-out",
        component: CheckOutComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "order-success",
        component: OrderSuccessComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "my/orders",
        component: MyOrdersComponent,
        canActivate: [AuthGuard]
      },
      { path: "admin/items", component: AdminItemsComponent },
      { path: "admin/orders", component: AdminOrdersComponent },
      { path: "login", component: LoginComponent, canActivate: [AuthGuard] },
      { path: "register", component: SignupComponent, canActivate: [AuthGuard] }



    ]),
    NgbModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    NgbdModalBasic
  ],
  providers: [
    HttpClientModule,
    AuthService,
    AuthGuard,
    FoodsDataService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    OrderService,
    UserService
  ],
  exports: [OrdersTable],

  bootstrap: [AppComponent]
})
export class AppModule {}
