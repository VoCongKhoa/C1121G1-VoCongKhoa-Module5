import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CustomerService} from "../../services/customers";
import {Router} from "@angular/router";

@Component({
  selector: 'app-modal-customer',
  templateUrl: './modal-customer.component.html',
  styleUrls: ['./modal-customer.component.css']
})
export class ModalCustomerComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA,) public deleteData: any,
              private customerService: CustomerService,
              private dialogRef: MatDialogRef<ModalCustomerComponent>,
              private router: Router) { }

  ngOnInit(): void {
  }

  deleteCustomer() {
    if(this.deleteData){
      this.customerService.delete(this.deleteData.customerId).subscribe(
        (response)=>{
          this.dialogRef.close('close');
        },
        (error)=>{
          console.log("FAILED");
          this.router.navigateByUrl('/error/404');
          }
      );
    }
  }
}
