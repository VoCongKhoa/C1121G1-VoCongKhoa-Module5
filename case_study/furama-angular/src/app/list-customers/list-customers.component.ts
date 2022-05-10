import { Component, OnInit } from '@angular/core';
import {Customer} from "../../models/customer";
import {CustomerService} from "../../services/customers";

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit {

  customers: Customer[] = [];
  constructor(private customerService: CustomerService) {
    this.getCustomers();
  }

  ngOnInit(): void {
  }

  getCustomers(){
    this.customers = this.customerService.getCustomers();
  }

}
