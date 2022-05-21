import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {CustomerService} from "../../../services/customers";
import {Customer} from "../../../models/customer";

@Component({
  selector: 'app-customer-modal',
  templateUrl: './customer-modal.component.html',
  styleUrls: ['./customer-modal.component.css']
})
export class CustomerModalComponent implements OnInit, OnChanges {

  @Input('customerChild') customerDelete: Customer;
  @ViewChild('btnDeleteClose') btnDeleteClose;
  @Output() flagDelete = new EventEmitter();

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.customerDelete = {
      customerId: 1,

      customerCode: '',

      customerName: '',

      customerBirthday: '',

      customerGender: 0,

      customerIdCard: '',

      customerPhone: '',

      customerEmail: '',

      customerAddress: '',

      customerType: {
        customerTypeId: 5,
        customerTypeName: "Member",
        active: 1
      },
      active: 1
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
    if ('customerDelete' in changes) {
      let customerTemp: Customer = changes.customerDelete.currentValue;
      customerTemp = typeof customerTemp === 'undefined' ? null : customerTemp;
      if (customerTemp != null) {
        this.customerService.getAllCustomers();
      }
    }
  }

  delete() {
    this.customerService.delete(this.customerDelete.customerId).subscribe(
      (response: void) => {
        this.customerService.getAllCustomers();
        this.flagDelete.emit(true);
      },
      (error: HttpErrorResponse) => {
        alert("Failed");
      });
    this.btnDeleteClose.nativeElement.click();
  }
}
