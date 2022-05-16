import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {Customer} from "../models/customer";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerTypeService} from "../services/customerTypes";
import {CustomerService} from "../services/customers";
import {CustomerType} from "../models/customerType";
import {CustomerDto} from "../dto/customerDto";

@Component({
  selector: 'app-update-customers',
  templateUrl: './update-customers.component.html',
  styleUrls: ['./update-customers.component.css']
})
export class UpdateCustomersComponent implements OnInit {
  customerDto: CustomerDto;
  customer: Customer;
  customers: Customer[] = [];
  customerTypes: CustomerType[] = [];
  customerUpdateForm: FormGroup = new FormGroup(
    {
      customerId: new FormControl("", [Validators.required]),
      customerCode: new FormControl("", [Validators.required, Validators.pattern('^$|^KH-[\\d]{4}$')]),
      customerName: new FormControl("", Validators.required),
      customerBirthday: new FormControl("", Validators.required),
      customerGender: new FormControl(""),
      customerIdCard: new FormControl("", [Validators.required, Validators.pattern('^$|^\\d{9}$')]),
      customerPhone: new FormControl("", [Validators.required, Validators.pattern('^$|^(0|\\(84\\)\\+)9[0|1]\\d{7}$')]),
      customerEmail: new FormControl("", [Validators.required, Validators.email]),
      customerAddress: new FormControl("", Validators.required),
      customerType: new FormControl("", Validators.required),
      active: new FormControl()
    }
  )

  // Dung cho truong hop customerType la doi tuong, dung ket hop voi [compareWith] = "compareFn" ben template
  // compareFn(t1: CustomerType, t2: CustomerType): boolean {
  //   return t1 && t2 ? t1.customerTypeId == t2.customerTypeId : t1 == t2;
  // };

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

  get customerType() {
    return this.customerUpdateForm.get('customerType');
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
    // this.customerService.getAllCustomers().subscribe((response)=>{
    //   this.customers = response;
    // });

    //Generate customerTypes list
    this.customerTypes = this.customerTypeService.getCustomerTypes();

    //Generate customer update form
    if (this.router.snapshot.params['id']) {
      this.customerService.findById(this.router.snapshot.params['id']).subscribe(
        (response) => {
          this.customer = response;
          this.customerId.setValue(response.data[0].customerId);
          this.customerCode.setValue(response.data[0].customerCode);
          this.customerName.setValue(response.data[0].customerName);
          this.customerBirthday.setValue(response.data[0].customerBirthday);
          this.customerGender.setValue(response.data[0].customerGender + ""); // Lay tu DB ve la kieu number, nen can chuyen sang string thi template moi hieu
          this.customerIdCard.setValue(response.data[0].customerIdCard);
          this.customerPhone.setValue(response.data[0].customerPhone);
          this.customerEmail.setValue(response.data[0].customerEmail);
          this.customerAddress.setValue(response.data[0].customerAddress);
          this.customerType.setValue(response.data[0].customerType.customerTypeId);
        },
        (error) => {
          confirm('Wrong customerId! Input again!');
          this.route.navigateByUrl('/list-customers');
        });
    }
  }

  onSubmit() {
    if (this.customerUpdateForm.invalid) {
      this.route.navigateByUrl('/update-customers/' + this.customerId.value);
    } else {
      //Chu y de navigate len dau moi duoc
      this.customerDto = this.customerUpdateForm.value;
      this.customerDto.active = 1;
      this.customerService.update(this.customerDto).subscribe(
        (response) => {
          this.route.navigateByUrl('/list-customers');
        },
        (error) => {
          this.route.navigateByUrl('/update-customers/' + this.customerId.value);
          console.log(error)
        }
      );
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


