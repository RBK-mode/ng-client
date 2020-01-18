import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngbd-modal-basic',
  templateUrl: './basic-modal.html'
})
// tslint:disable-next-line:component-class-suffix
export class NgbdModalBasic implements OnInit {
  closeResult: string;
  @Input() items;
  // tslint:disable-next-line:variable-name
  @Input() my_modal_title;
  // tslint:disable-next-line:variable-name
  @Input() my_modal_content;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
  }
}
