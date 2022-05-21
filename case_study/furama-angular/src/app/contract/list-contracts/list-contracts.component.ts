import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import {ContractService} from "../../services/contracts";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {MatPaginator} from "@angular/material/paginator";
import {Contract} from "../../models/contract";
import {MatTableDataSource} from "@angular/material/table";


@Component({
  selector: 'app-list-contracts',
  templateUrl: './list-contracts.component.html',
  styleUrls: ['./list-contracts.component.css']
})
export class ListContractsComponent implements OnInit {
  p: number = 1;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['contractId','contractStartDate','contractEndDate','contractDeposit','contractTotalMoney','employee','customer', 'services','actions'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  contracts : Contract[] = [];
  contractRoot: Contract;
  constructor(public dialog: MatDialog, private contractService:ContractService, private router: Router) {
    this.getContracts();
  }

  ngOnInit(): void {
    this.getContracts();
  }

  getContracts(){
    this.contractService.getAllContract().subscribe(
      (response: Contract[]) => {
        this.dataSource = new MatTableDataSource<any>(response);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
