import { Component, OnInit, Output } from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { FoodsDataService } from "../foods-data.service";
import { Router } from "@angular/router";
import { EventEmitter } from "events";

@Component({
  selector: "app-shipping",
  templateUrl: "./shipping.component.html",
  styleUrls: ["./shipping.component.css"]
})
export class ShippingComponent implements OnInit {
  closeResult: string;
  shippementDetails: any = {};
  constructor(
    private modalService: NgbModal,
    private fd: FoodsDataService,
    private router: Router
  ) {}

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
  ngOnInit() {}

  clearData() {
    this.fd.resetData();
  }
  confirm(inputAdress, inputPhone) {
    this.shippementDetails["adress"] = inputAdress.value;
    this.shippementDetails["phone"] = inputPhone.value;
    this.fd.postOrder(this.shippementDetails);
    this.router.navigate(["/"]);
  }
}
