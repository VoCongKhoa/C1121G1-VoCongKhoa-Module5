import {Component, OnInit} from '@angular/core';
import {Facility} from "../../models/facility";
import {RentType} from "../../models/rentType";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {RentTypeService} from "../../services/rentTypes";
import {gte} from "../../services/gte";
import {FacilityService} from "../../services/facilities";

@Component({
  selector: 'app-create-facilities',
  templateUrl: './create-facilities.component.html',
  styleUrls: ['./create-facilities.component.css']
})
export class CreateFacilitiesComponent implements OnInit {
  check = 0;
  facility: Facility;
  rentTypes: RentType[] = [];
  facilityCreateForm: FormGroup;

  constructor(private router: ActivatedRoute,
              private rentTypeService: RentTypeService,
              private facilityService: FacilityService,
              private fb: FormBuilder,
              private route: Router) {
    this.rentTypes = this.rentTypeService.getRentTypes();
  }

  ngOnInit(): void {
    this.facilityCreateForm = this.fb.group({
      serviceId: [''],
      serviceCode: ['', [Validators.required, Validators.pattern('^$|^DV-[\\d]{4}$')]],
      serviceName: ['', Validators.required],
      serviceImage: [''],
      serviceArea: ['', [Validators.required, gte]],
      serviceCost: ['', [Validators.required, gte]],
      serviceMaxPeople: ['', [Validators.required, gte]],
      standardRoom: [''],
      descriptionOtherConvenience: [''],
      poolArea: ['', [gte]],
      numberOfFloors: ['', [gte]],
      freeAttachedService: [''],
      rentType: [],
      serviceTypeId: []
    })

    //Generate facility update form
    if (this.router.snapshot.params['id']) {
      this.facility = this.facilityService.findById(this.router.snapshot.params['id'])[0];
      this.facilityCreateForm.patchValue(this.facility);
    }
  }

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


  showFormCreate(event) {
    if (event.target.value == 0) {
      this.check = 0;
    }
    if (event.target.value == 1) {
      this.check = 1;
      this.facilityCreateForm.controls['serviceTypeId'].setValue(1);
      this.facilityCreateForm.controls['rentType'].setValue({
        rentTypeId: 4,
        rentTypeName: "hour",
        rentTypeCost: 10000000,
        active: 1
      });
    }
    if (event.target.value == 2) {
      this.check = 2;
      this.facilityCreateForm.controls['serviceTypeId'].setValue(2);
      this.facilityCreateForm.controls['rentType'].setValue({
        rentTypeId: 4,
        rentTypeName: "hour",
        rentTypeCost: 10000000,
        active: 1
      });
    }
    if (event.target.value == 3) {
      this.check = 3;
      this.facilityCreateForm.controls['serviceTypeId'].setValue(3);
      this.facilityCreateForm.controls['rentType'].setValue({
        rentTypeId: 4,
        rentTypeName: "hour",
        rentTypeCost: 10000000,
        active: 1
      });
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
      if (this.serviceCost.value == '') {
        this.serviceCost.setErrors({empty: 'Empty! Please input!'})
      }
      if (this.serviceMaxPeople.value == '') {
        this.serviceMaxPeople.setErrors({empty: 'Empty! Please input!'})
      }
      // if (this.standardRoom.value == '') {
      //   this.standardRoom.setErrors({empty: 'Empty! Please input!'})
      // }
      // if (this.descriptionOtherConvenience.value == '') {
      //   this.descriptionOtherConvenience.setErrors({empty: 'Empty! Please input!'})
      // }
      if (this.poolArea.value == '') {
        this.poolArea.setErrors({empty: 'Empty! Please input!'})
      }
      if (this.numberOfFloors.value == '') {
        this.numberOfFloors.setErrors({empty: 'Empty! Please input!'})
      }
      // if (this.freeAttachedService.value == '') {
      //   this.freeAttachedService.setErrors({empty: 'Empty! Please input!'})
      // }
      // if (this.rentType.value == '') {
      //   this.rentType.setErrors({empty: 'Empty! Please input!'})
      // }
      // if (this.serviceTypeId.value == '') {
      //   this.serviceTypeId.setErrors({empty: 'Empty! Please input!'})
      // }

      this.route.navigateByUrl('/create-facilities');
    } else {
      console.log(this.facilityCreateForm.value);
      this.route.navigateByUrl('/facilities');
      this.facilityService.createFacility(this.facilityCreateForm.value);
      // this.facility = this.facilityCreateForm.value;
    }

  }
}
