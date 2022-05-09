import { Component, OnInit } from '@angular/core';
import { customerList } from "../customers";
import {ActivatedRoute} from "@angular/router";
import {Customer} from "../../models/customer";

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit {

  // @ts-ignore
  customers = customerList;
  constructor() {

  }

  ngOnInit(): void {
  }

}
