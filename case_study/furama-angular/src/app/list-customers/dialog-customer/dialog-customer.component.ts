import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CustomerType} from "../../models/customerType";
import {CustomerTypeService} from "../../services/customerTypes";
import {CustomerService} from "../../services/customers";
import {CustomerDto} from "../../dto/customerDto";

@Component({
  selector: 'app-dialog-customer',
  templateUrl: './dialog-customer.component.html',
  styleUrls: ['./dialog-customer.component.css']
})
export class DialogCustomerComponent implements OnInit {
  customerForm !: FormGroup;
  actionBtn: string = 'Save';
  customerTypes !: CustomerType[];
  warningMessage : string;

  compareFn(c1: CustomerType, c2: CustomerType): boolean{
    return c1 && c2 ? c1.customerTypeId == c2.customerTypeId : c1 == c2;
  };

  constructor(private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public updateData : any,
              private dialogRef : MatDialogRef<DialogCustomerComponent>,
              private customerTypeService: CustomerTypeService,
              private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getAllCustomerTypes();
    this.customerForm = this.fb.group({
      customerId: ["", Validators.required],
      customerCode: ["", [Validators.required, Validators.pattern('^$|^KH-[\\d]{4}$')]],
      customerName: ["", Validators.required],
      customerBirthday: ["", Validators.required],
      customerGender: [""],
      customerIdCard: ["", [Validators.required, Validators.pattern('^$|^\\d{9}$')]],
      customerPhone: ["", [Validators.required, Validators.pattern('^$|^(0|\\(84\\)\\+)9[0|1]\\d{7}$')]],
      customerEmail: ["", [Validators.required, Validators.email]],
      customerAddress: ["", Validators.required],
      customerType: ["", Validators.required]
    })
    if(this.updateData){
      this.customerForm.controls['customerId'].setValue(this.updateData.customerId);
      this.customerForm.controls['customerCode'].setValue(this.updateData.customerCode);
      this.customerForm.controls['customerName'].setValue(this.updateData.customerName);
      this.customerForm.controls['customerBirthday'].setValue(this.updateData.customerBirthday);
      this.customerForm.controls['customerGender'].setValue(this.updateData.customerGender + "");
      this.customerForm.controls['customerIdCard'].setValue(this.updateData.customerIdCard);
      this.customerForm.controls['customerPhone'].setValue(this.updateData.customerPhone);
      this.customerForm.controls['customerEmail'].setValue(this.updateData.customerEmail);
      this.customerForm.controls['customerAddress'].setValue(this.updateData.customerAddress);
      this.customerForm.controls['customerType'].setValue(this.updateData.customerType);
      this.actionBtn = 'Update';
    }


  }

  get customerCode() {
    return this.customerForm.get('customerCode');
  }

  get customerName() {
    return this.customerForm.get('customerName');
  }

  get customerBirthday() {
    return this.customerForm.get('customerBirthday');
  }

  get customerGender() {
    return this.customerForm.get('customerGender');
  }

  get customerIdCard() {
    return this.customerForm.get('customerIdCard');
  }

  get customerPhone() {
    return this.customerForm.get('customerPhone');
  }

  get customerEmail() {
    return this.customerForm.get('customerEmail');
  }

  get customerAddress() {
    return this.customerForm.get('customerAddress');
  }

  get customerType() {
    return this.customerForm.get('customerType');
  }

  getAllCustomerTypes(){
    this.customerTypeService.getAllCustomerTypes().subscribe(
      (response)=>{
        this.customerTypes = response;
      }
    );
  }

  updateCustomer() {
    if (this.customerForm.invalid) {
      if (this.customerCode.value == '') {
        this.customerCode.setErrors({empty: 'Empty! Please input!'})
      }
      if (this.customerName.value == '') {
        this.customerName.setErrors({empty: 'Empty! Please input!'})
      }
      if (this.customerBirthday.value == '') {
        this.customerBirthday.setErrors({empty: 'Empty! Please input!'})
      }
      if (this.customerGender.value == '') {
        this.customerGender.setErrors({empty: 'Empty! Please input!'})
      }
      if (this.customerIdCard.value == '') {
        this.customerIdCard.setErrors({empty: 'Empty! Please input!'})
      }
      if (this.customerPhone.value == '') {
        this.customerPhone.setErrors({empty: 'Empty! Please input!'})
      }
      if (this.customerEmail.value == '') {
        this.customerEmail.setErrors({empty: 'Empty! Please input!'})
      }
      if (this.customerAddress.value == '') {
        this.customerAddress.setErrors({empty: 'Empty! Please input!'})
      }
      if (this.customerType.value == '') {
        this.customerType.setErrors({empty: 'Empty! Please input!'})
      }
    } else {
      let customerDto : CustomerDto = this.customerForm.value;
      customerDto.customerType = this.customerForm.value.customerType.customerTypeId;
      customerDto.active = 1;
      this.customerService.update(customerDto).subscribe(
        (response)=>{
          console.log('OK');
          this.customerForm.reset();
          this.dialogRef.close('update');
        },
        (error)=>{
          if (!error.error.status) {
            this.customerCode.setErrors({existed: error.error.errorMap.customerCode});
          } else {
            this.warningMessage = 'Update Failed!'
          }
        },
      )
    }
  }
}
