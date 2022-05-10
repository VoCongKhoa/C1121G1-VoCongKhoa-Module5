import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerService} from "../../services/customers";
import {CustomerTypeService} from "../../services/customerTypes";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Customer} from "../../models/customer";
import {CustomerType} from "../../models/customerType";


@Component({
  selector: 'app-create-customers',
  templateUrl: './create-customers.component.html',
  styleUrls: ['./create-customers.component.css'],
})
export class CreateCustomersComponent implements OnInit {
  customer: Customer;
  customers: Customer[] = [];
  customerTypes: CustomerType[] = [];
  customerCreateForm: FormGroup = new FormGroup(
    {
      customerCode: new FormControl("", [Validators.required, Validators.pattern('^$|^KH-[\\d]{4}$')]),
      customerName: new FormControl("", Validators.required),
      customerBirthday: new FormControl("", Validators.required),
      customerGender: new FormControl(),
      customerIdCard: new FormControl("", [Validators.required, Validators.pattern('^$|^\\d{9}$')]),
      customerPhone: new FormControl("", [Validators.required, Validators.pattern('^$|^(0|\\(84\\)\\+)9[0|1]\\d{7}$')]),
      customerEmail: new FormControl("", [Validators.required, Validators.email]),
      customerAddress: new FormControl("", Validators.required),
      customerTypeId: new FormControl("", Validators.required)
    }
  )

  get customerCode() {
    return this.customerCreateForm.get('customerCode');
  }

  get customerName() {
    return this.customerCreateForm.get('customerName');
  }

  get customerBirthday() {
    return this.customerCreateForm.get('customerBirthday');
  }

  get customerGender() {
    return this.customerCreateForm.get('customerGender');
  }

  get customerIdCard() {
    return this.customerCreateForm.get('customerIdCard');
  }

  get customerPhone() {
    return this.customerCreateForm.get('customerPhone');
  }

  get customerEmail() {
    return this.customerCreateForm.get('customerEmail');
  }

  get customerAddress() {
    return this.customerCreateForm.get('customerAddress');
  }

  get customerTypeId() {
    return this.customerCreateForm.get('customerTypeId');
  }

  constructor(private router: ActivatedRoute,
              private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private fb: FormBuilder,
              private route: Router) {
  }

  ngOnInit(): void {
    //Generate customers list
    this.customers = this.customerService.getCustomers();

    //Generate customerTypes list
    this.customerTypes = this.customerTypeService.getCustomerTypes();
  }

  onSubmit() {
    if (this.customerCreateForm.invalid) {
      if (this.customerCode.value == '') {
        this.customerCode.setErrors({empty: 'Empty! Please input!'})
      }
      if (this.customerName.value == '') {
        this.customerName.setErrors({empty: 'Empty! Please input!'})
      }
      if (this.customerBirthday.value == '') {
        this.customerBirthday.setErrors({empty: 'Empty! Please input!'})
      }
      if (this.customerGender.value == null) {
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
      if (this.customerTypeId.value == '') {
        this.customerTypeId.setErrors({empty: 'Empty! Please input!'})
      }

      this.route.navigateByUrl('/create-customers');
    } else {
      this.route.navigateByUrl('/list-customers');
      this.customer = this.customerCreateForm.value;
      this.customerService.createCustomer(this.customer);
    }
  }
}
