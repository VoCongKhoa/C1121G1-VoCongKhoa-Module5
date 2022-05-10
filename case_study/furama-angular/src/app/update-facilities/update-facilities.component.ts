import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RentTypeService} from "../../services/rentTypes";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Facility} from "../../models/facility";
import {RentType} from "../../models/rentType";
import {FacilityService} from "../../services/facilities";
import {gte} from "../../services/gte";

@Component({
  selector: 'app-update-facilities',
  templateUrl: './update-facilities.component.html',
  styleUrls: ['./update-facilities.component.css']
})
export class UpdateFacilitiesComponent implements OnInit {
  facility: Facility;
  rentTypes: RentType[] = [];

  facilityUpdateForm: FormGroup = new FormGroup(
    {
      serviceId: new FormControl(""),
      serviceCode: new FormControl("", [Validators.required, Validators.pattern('^$|^DV-[\\d]{4}$')]),
      serviceName: new FormControl("",Validators.required),
      serviceImage: new FormControl(""),
      serviceArea: new FormControl(0,[Validators.required, gte]),
      serviceCost: new FormControl(0,[Validators.required, gte]),
      serviceMaxPeople: new FormControl(0,[Validators.required, gte]),
      standardRoom: new FormControl(""),
      descriptionOtherConvenience: new FormControl(""),
      poolArea: new FormControl(0,[gte]),
      numberOfFloors: new FormControl(0,[gte]),
      freeAttachedService: new FormControl(""),
      rentType: new FormGroup(
        {
          rentTypeId: new FormControl(0,Validators.required)
        }
      ),
      serviceTypeId: new FormControl(0,Validators.required)
    }
  )

  get serviceId() {
    return this.facilityUpdateForm.get('serviceId');
  }

  get serviceCode() {
    return this.facilityUpdateForm.get('serviceCode');
  }

  get serviceName() {
    return this.facilityUpdateForm.get('serviceName');
  }

  get serviceImage() {
    return this.facilityUpdateForm.get('serviceImage');
  }

  get serviceArea() {
    return this.facilityUpdateForm.get('serviceArea');
  }

  get serviceCost() {
    return this.facilityUpdateForm.get('serviceCost');
  }

  get serviceMaxPeople() {
    return this.facilityUpdateForm.get('serviceMaxPeople');
  }

  get standardRoom() {
    return this.facilityUpdateForm.get('standardRoom');
  }

  get descriptionOtherConvenience() {
    return this.facilityUpdateForm.get('descriptionOtherConvenience');
  }

  get poolArea() {
    return this.facilityUpdateForm.get('poolArea');
  }

  get numberOfFloors() {
    return this.facilityUpdateForm.get('numberOfFloors');
  }

  get freeAttachedService() {
    return this.facilityUpdateForm.get('freeAttachedService');
  }

  get rentType() {
    return this.facilityUpdateForm.get('rentType');
  }

  get serviceTypeId() {
    return this.facilityUpdateForm.get('serviceTypeId');
  }

  constructor(private router: ActivatedRoute,
              private rentTypeService: RentTypeService,
              private facilityService: FacilityService,
              private fb: FormBuilder,
              private route: Router) {
  }

  ngOnInit(): void {
    this.rentTypes = this.rentTypeService.getRentTypes();

    //Generate facility update form
    this.facility = new Facility();
    if (this.router.snapshot.params['id']) {
      this.facility = this.facilityService.findById(this.router.snapshot.params['id'])[0];
      this.facilityUpdateForm.patchValue(this.facility);
    }
  }

  onSubmit() {
    if (this.facilityUpdateForm.invalid) {
      this.route.navigateByUrl('/update-facilities/' + this.serviceId.value);
    } else {
      //Chu y de navigate len dau moi duoc
      this.route.navigateByUrl('/facilities');
      this.facility = this.facilityUpdateForm.value;
      this.facilityService.updateFacility(this.facility);
    }
  }

}
