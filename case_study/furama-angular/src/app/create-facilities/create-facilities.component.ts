import { Component, OnInit } from '@angular/core';
import {Facility} from "../../models/facility";
import {RentType} from "../../models/rentType";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {RentTypeService} from "../../services/rentTypes";

@Component({
  selector: 'app-create-facilities',
  templateUrl: './create-facilities.component.html',
  styleUrls: ['./create-facilities.component.css']
})
export class CreateFacilitiesComponent implements OnInit {
  check = 0;
  facility: Facility;
  rentTypes: RentType[] = [];

  facilityCreateForm: FormGroup = new FormGroup(
    {
      serviceCode: new FormControl(""),
      serviceName: new FormControl(""),
      serviceImage: new FormControl(""),
      serviceArea: new FormControl(),
      serviceCost: new FormControl(""),
      serviceMaxPeople: new FormControl(""),
      standardRoom: new FormControl(""),
      descriptionOtherConvenience: new FormControl(""),
      poolArea: new FormControl(""),
      numberOfFloors: new FormControl(""),
      freeAttachedService: new FormControl(""),
      rentType: new FormGroup(
        {
          rentTypeId: new FormControl()
        }
      ),
      serviceTypeId: new FormControl()
    }
  )

  get serviceCode() {
    return this.facilityCreateForm.get('serviceCode');
  }
  get serviceName() {
    return this.facilityCreateForm.get('serviceName');
  }
  get serviceImage() {
    return this.facilityCreateForm.get('serviceImage');
  }
  get serviceArea() {
    return this.facilityCreateForm.get('serviceArea');
  }
  get serviceCost() {
    return this.facilityCreateForm.get('serviceCost');
  }
  get serviceMaxPeople() {
    return this.facilityCreateForm.get('serviceMaxPeople');
  }
  get standardRoom() {
    return this.facilityCreateForm.get('standardRoom');
  }
  get descriptionOtherConvenience() {
    return this.facilityCreateForm.get('descriptionOtherConvenience');
  }
  get poolArea() {
    return this.facilityCreateForm.get('poolArea');
  }
  get numberOfFloors() {
    return this.facilityCreateForm.get('numberOfFloors');
  }
  get freeAttachedService() {
    return this.facilityCreateForm.get('freeAttachedService');
  }
  get rentType() {
    return this.facilityCreateForm.get('rentType');
  }
  get serviceTypeId() {
    return this.facilityCreateForm.get('serviceTypeId');
  }




  constructor(private router: ActivatedRoute,
              private rentTypeService: RentTypeService,
              private fb: FormBuilder,
              private route: Router) { }

  ngOnInit(): void {
    this.rentTypes = this.rentTypeService.getRentTypes();
  }

  showFormCreate(event) {
    if (event.target.value == 0){
      this.check = 0;
    }
      if (event.target.value == 1){
          this.check = 1;
      }
      if (event.target.value == 2){
        this.check = 2;
      }
      if (event.target.value == 3){
        this.check = 3;
      }
  }

  onSubmit() {
    if (this.facilityCreateForm.invalid) {
      if (this.serviceCode.value == '') {
        this.serviceCode.setErrors({empty: 'Empty! Please input!'})
      }
      if (this.serviceName.value == '') {
        this.serviceName.setErrors({empty: 'Empty! Please input!'})
      }
      if (this.serviceArea.value == '') {
        this.serviceArea.setErrors({empty: 'Empty! Please input!'})
      }
      if (this.serviceCost.value == null) {
        this.serviceCost.setErrors({empty: 'Empty! Please input!'})
      }
      if (this.serviceMaxPeople.value == '') {
        this.serviceMaxPeople.setErrors({empty: 'Empty! Please input!'})
      }
      if (this.standardRoom.value == '') {
        this.standardRoom.setErrors({empty: 'Empty! Please input!'})
      }
      if (this.descriptionOtherConvenience.value == '') {
        this.descriptionOtherConvenience.setErrors({empty: 'Empty! Please input!'})
      }
      if (this.poolArea.value == '') {
        this.poolArea.setErrors({empty: 'Empty! Please input!'})
      }
      if (this.numberOfFloors.value == '') {
        this.numberOfFloors.setErrors({empty: 'Empty! Please input!'})
      }
      if (this.freeAttachedService.value == '') {
        this.freeAttachedService.setErrors({empty: 'Empty! Please input!'})
      }
      if (this.rentType.value == '') {
        this.rentType.setErrors({empty: 'Empty! Please input!'})
      }
      if (this.serviceTypeId.value == '') {
        this.serviceTypeId.setErrors({empty: 'Empty! Please input!'})
      }

      this.route.navigateByUrl('/create-customers');
    } else {
      console.log(this.facilityCreateForm);
      this.route.navigateByUrl('/facilities');
      // this.facility = this.facilityCreateForm.value;
    }

  }
}
