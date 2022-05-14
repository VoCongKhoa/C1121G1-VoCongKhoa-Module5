import { Component, OnInit } from '@angular/core';
import {ContractService} from "../../services/contracts";
import {Contract} from "../../models/contract";
import {HttpErrorResponse} from "@angular/common/http";
// import {contractList} from "../../services/contracts";

@Component({
  selector: 'app-list-contracts',
  templateUrl: './list-contracts.component.html',
  styleUrls: ['./list-contracts.component.css']
  // providers: [ContractService]
})
export class ListContractsComponent implements OnInit {

  contracts : Contract[] = [];
  contractRoot: Contract;
  p: number;
  constructor(private contractService:ContractService) {
    this.getContracts();
  }

  ngOnInit(): void {
    this.getContracts();
  }

  getContracts(){
    this.contractService.getAllContract().subscribe(
      (response: Contract[]) => {
        this.contracts = response;
          console.log('OK');
      },
      (error: HttpErrorResponse) => {
        console.log('Failed');
      }
    );
  }

  sendDelete(contract: Contract) {
    this.contractRoot = contract;
  }

  confirmDelete(c: any){
    if (c){
      this.getContracts();
      // window.location.reload();
    }
  }
}
