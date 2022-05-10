import { Component, OnInit } from '@angular/core';
import {ContractService} from "../../services/contracts";
import {Contract} from "../../models/contract";
// import {contractList} from "../../services/contracts";

@Component({
  selector: 'app-list-contracts',
  templateUrl: './list-contracts.component.html',
  styleUrls: ['./list-contracts.component.css']
  // providers: [ContractService]
})
export class ListContractsComponent implements OnInit {

  contracts : Contract[] = [];
  constructor(private contractService:ContractService) {
    this.getContracts();
  }

  ngOnInit(): void {
  }

  getContracts(){
    this.contracts = this.contractService.getContracts();
  }

}
