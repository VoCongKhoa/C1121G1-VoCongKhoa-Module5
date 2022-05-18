import {Component, OnInit, ViewChild} from '@angular/core';
import {Customer} from "../models/customer";
import {CustomerService} from "../services/customers";
import {HttpErrorResponse} from "@angular/common/http";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import {DialogCustomerComponent} from "./dialog-customer/dialog-customer.component";
import {ModalCustomerComponent} from "./modal-customer/modal-customer.component";
import {FacilityService} from "../services/facilities";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit {
  p: number = 1;
  customers: Customer[];
  customerRoot: Customer;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['customerId','customerCode','customerName','customerBirthday','customerGender','customerIdCard','customerPhone','actions'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, private customerService: CustomerService, private router: Router) {
  }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.customerService.getAllCustomers().subscribe(
      (response: Customer[]) => {
        this.dataSource = new MatTableDataSource<any>(response);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        this.router.navigateByUrl('/error/404');

      }
    )
  }

  sendDelete(c: Customer) {
    this.customerRoot = c;
  }

  confirmDelete(e: any){
    if (e){
      this.getCustomers();
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

  updateCustomer(row: any) {
    this.dialog.open(DialogCustomerComponent,{
      width: '60%',
      data: row
    }).afterClosed().subscribe((response)=>{ this.getCustomers();});
  }

  deleteCustomer(row: any){
    this.dialog.open(ModalCustomerComponent,{
      width: '60%',
      data: row
    }).afterClosed().subscribe((response)=>{ this.getCustomers();});
  }
}
