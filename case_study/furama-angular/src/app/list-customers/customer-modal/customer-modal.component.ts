import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Customer} from "../../../models/customer";
import {CustomerService} from "../../../services/customers";

@Component({
  selector: 'app-customer-modal',
  templateUrl: './customer-modal.component.html',
  styleUrls: ['./customer-modal.component.css']
})
export class CustomerModalComponent implements OnInit {
  @Input('customerChild') customerDelete: Customer;
  @ViewChild('btnDeleteClose') btnDeleteClose;
  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.customerDelete = {
      customerId: 1,

      customerCode: '',

      customerName: '',

      customerBirthday: '',

      customerGender: '0',

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

  delete() {
    this.customerService.delete(this.customerDelete.customerId);
    this.btnDeleteClose.nativeElement.click();
  }

}
