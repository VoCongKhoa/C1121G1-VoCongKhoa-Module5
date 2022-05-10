import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {Customer} from "../../models/customer";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerTypeService} from "../../services/customerTypes";
import {CustomerService} from "../../services/customers";
import {CustomerType} from "../../models/customerType";

@Component({
  selector: 'app-update-customers',
  templateUrl: './update-customers.component.html',
  styleUrls: ['./update-customers.component.css']
})
export class UpdateCustomersComponent implements OnInit {
  customer: Customer;
  customers: Customer[] = [];
  customerTypes: CustomerType[] = [];
  customerUpdateForm: FormGroup = new FormGroup(
    {
      customerId: new FormControl("", [Validators.required]),
      customerCode: new FormControl("", [Validators.required, Validators.pattern('^$|^KH-[\\d]{4}$')]),
      customerName: new FormControl("", Validators.required),
      customerBirthday: new FormControl("", Validators.required),
      customerGender: new FormControl(),
      customerIdCard: new FormControl("", [Validators.required, Validators.pattern('^$|^\\d{9}$')]),
      customerPhone: new FormControl("", [Validators.required, Validators.pattern('^$|^(0|\\(84\\)\\+)9[0|1]\\d{7}$')]),
      customerEmail: new FormControl("", [Validators.required, Validators.email]),
      customerAddress: new FormControl("", Validators.required),
      customerTypeId: new FormControl("", Validators.required),
      active: new FormControl()
    }
  )

  get customerId() {
    return this.customerUpdateForm.get('customerId');
  }

  get customerCode() {
    return this.customerUpdateForm.get('customerCode');
  }

  get customerName() {
    return this.customerUpdateForm.get('customerName');
  }

  get customerBirthday() {
    return this.customerUpdateForm.get('customerBirthday');
  }

  get customerGender() {
    return this.customerUpdateForm.get('customerGender');
  }

  get customerIdCard() {
    return this.customerUpdateForm.get('customerIdCard');
  }

  get customerPhone() {
    return this.customerUpdateForm.get('customerPhone');
  }

  get customerEmail() {
    return this.customerUpdateForm.get('customerEmail');
  }

  get customerAddress() {
    return this.customerUpdateForm.get('customerAddress');
  }

  get customerTypeId() {
    return this.customerUpdateForm.get('customerTypeId');
  }
  get active() {
    return this.customerUpdateForm.get('active');
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

    //Generate customer update form
    this.customer = new Customer();
    if (this.router.snapshot.params['id']) {
      this.customer = this.customerService.findById(this.router.snapshot.params['id'])[0];
      this.customerUpdateForm.patchValue(this.customer);
    }
  }

  onSubmit() {
    if (this.customerUpdateForm.invalid) {
      this.route.navigateByUrl('/update-customers/' + this.customerId.value);
    } else {

      //Chu y de navigate len dau moi duoc
      this.route.navigateByUrl('/list-customers');
      this.customer = this.customerUpdateForm.value;
      this.customerService.updateCustomer(this.customer);
      console.log(this.customer.active)
    }


  }
}

//CODE DU
// DUNG FILTER
// this.customer = this.customerService.getCustomers().filter(c => c.customerId == this.router.snapshot.params['id'])[0];


// DUNG MAP
// this.customers = this.customers.map(
//   (c) => {
//     if(c.customerId == this.customer.customerId){
//       c = this.customer;
//     }
//     return c;
//   }
// );
// console.log(this.customers);
// this.customerUpdateForm.patchValue(this.customer);


