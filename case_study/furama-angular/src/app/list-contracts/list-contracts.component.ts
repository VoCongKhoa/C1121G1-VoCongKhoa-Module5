import { Component, OnInit } from '@angular/core';
import {contractList} from "../contracts";

@Component({
  selector: 'app-list-contracts',
  templateUrl: './list-contracts.component.html',
  styleUrls: ['./list-contracts.component.css']
})
export class ListContractsComponent implements OnInit {

  contracts = contractList;
  constructor() { }

  ngOnInit(): void {
  }

}
