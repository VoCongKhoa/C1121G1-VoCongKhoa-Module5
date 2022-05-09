import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Customer} from "../../models/customer";
import {ActivatedRoute} from "@angular/router";
import {customerList} from "../customers";
import {customerTypeList} from "../customerTypes";

@Component({
  selector: 'app-update-customers',
  templateUrl: './update-customers.component.html',
  styleUrls: ['./update-customers.component.css']
})
export class UpdateCustomersComponent implements OnInit {
  customer: Customer;
  customers = customerList;
  customerTypes = customerTypeList;
  constructor(private router: ActivatedRoute) {
    this.customer = new Customer();
    if(router.snapshot.params['id']){
      // this.customer.customerId = router.snapshot.params['id'];
      this.customer = customerList.filter(c => c.customerId == router.snapshot.params['id'])[0];
    }
  }

  ngOnInit(): void {
  }

  updateCustomer(f: NgForm) {
    console.log(f);
    this.customer = f.value;
  }
}
