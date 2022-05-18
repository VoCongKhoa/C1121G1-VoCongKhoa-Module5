import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Customer} from "../models/customer";
import {Facility} from "../models/facility";
import {gte} from "../services/gte";
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeService} from "../services/employees";
import {CustomerService} from "../services/customers";
import {FacilityService} from "../services/facilities";
import {Employee} from "../models/employee";
import {ContractService} from "../services/contracts";
import {ContractDto} from "../dto/contractDto";

@Component({
  selector: 'app-create-contracts',
  templateUrl: './create-contracts.component.html',
  styleUrls: ['./create-contracts.component.css']
})
export class CreateContractsComponent implements OnInit {
  contractCreateForm: FormGroup;
  employees: Employee[] = [];
  customers: Customer[] = [];
  facilities: Facility[] = [];

  constructor(private fb: FormBuilder,
              private router: ActivatedRoute,
              private route: Router,
              private employeeService: EmployeeService,
              private customerServic: CustomerService,
              private facilityService: FacilityService,
              private contractService: ContractService) {
    this.employees = this.employeeService.getEmployees();
    this.getAllCustomers();
    this.getAllFacilities();
  }

  ngOnInit(): void {
    this.contractCreateForm = this.fb.group({
      contractStartDate: ['', [Validators.required]],
      contractEndDate: ['', [Validators.required]],
      contractDeposit: ['', [Validators.required, gte]],
      contractTotalMoney: ['', [Validators.required, gte]],
      employee: [1, [Validators.required]],
      customer: [1, [Validators.required]],
      services: [1, [Validators.required]],
    })
  }

  get contractStartDate() {
    return this.contractCreateForm.get('contractStartDate');
  }

  get contractEndDate() {
    return this.contractCreateForm.get('contractEndDate');
  }

  get contractDeposit() {
    return this.contractCreateForm.get('contractDeposit');
  }

  get contractTotalMoney() {
    return this.contractCreateForm.get('contractTotalMoney');
  }

  get employee() {
    return this.contractCreateForm.get('employee');
  }

  get customer() {
    return this.contractCreateForm.get('customer');
  }

  get services() {
    return this.contractCreateForm.get('services');
  }

  onSubmit() {
    if (this.contractStartDate.value != '' && this.contractEndDate.value != '') {
      let contractStartDateParse = new Date(this.contractStartDate.value)
      let contractEndDateParse = new Date(this.contractEndDate.value)
      if (contractStartDateParse > contractEndDateParse) {
        this.contractStartDate.setErrors({dateErrors: 'Start date must be before end date! Please choose again!'})
        this.contractEndDate.setErrors({dateErrors: 'End date must be after start date! Please choose again!'})
      }
    }
    if (this.contractCreateForm.invalid) {
      if (this.contractStartDate.value == '') {
        this.contractStartDate.setErrors({empty: 'Empty! Please choose!'})
      }
      if (this.contractEndDate.value == '') {
        this.contractEndDate.setErrors({empty: 'Empty! Please choose!'})
      }
      if (this.contractDeposit.value == '') {
        this.contractDeposit.setErrors({empty: 'Empty! Please input!'})
      }
      if (this.contractTotalMoney.value == '') {
        this.contractTotalMoney.setErrors({empty: 'Empty! Please input!'})
      }
      if (this.employee.value == '') {
        this.employee.setErrors({empty: 'Empty! Please choose!'})
      }
      if (this.customer.value == '') {
        this.customer.setErrors({empty: 'Empty! Please choose!'})
      }
      if (this.services.value == '') {
        this.services.setErrors({empty: 'Empty! Please choose!'})
      }

      this.route.navigateByUrl('/create-contracts');
    } else {
      let contractDto: ContractDto = this.contractCreateForm.value;
      contractDto.active = 1;
      console.log(contractDto)
      this.contractService.create(contractDto).subscribe(
        (response)=>{
          this.contractCreateForm.reset();
          this.route.navigateByUrl('/list-contracts');
          console.log("OK")
        },
        (error)=>{ alert("FAILED")}
      );
    }
  }


  getAllCustomers() {
    this.customerServic.getAllCustomers().subscribe(
      (response) => {
        this.customers = response;
      }
    );
  }

  getAllFacilities() {
    this.facilityService.getAllFacilities().subscribe(
      (response) => {
        this.facilities = response;
      }
    );
  }
}
