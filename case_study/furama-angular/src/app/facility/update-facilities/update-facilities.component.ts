import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RentType} from "../../models/rentType";
import {gte} from "../../services/gte";
import {FacilityService} from "../../services/facilities";
import {Facility} from "../../models/facility";
import {FacilityDTO} from "../../models/facilityDTO";
import {RentTypeService} from "../../services/rentTypes";


@Component({
  selector: 'app-update-facilities',
  templateUrl: './update-facilities.component.html',
  styleUrls: ['./update-facilities.component.css']
})
export class UpdateFacilitiesComponent implements OnInit {
  facility: Facility;
  facilityDTO: FacilityDTO = new FacilityDTO();
  rentTypes: RentType[] = [];
  facilityUpdateForm: FormGroup;

  constructor(private router: ActivatedRoute,
              private rentTypeService: RentTypeService,
              private facilityService: FacilityService,
              private fb: FormBuilder,
              private route: Router) {
    this.rentTypes = this.rentTypeService.getRentTypes();
  }

  // compareFn(c1: Facility, c2: Facility): boolean {
  //   return c1 && c2 ? c1.rentType.rentTypeId == c2.rentType.rentTypeId : c1 == c2;
  // }


  ngOnInit(): void {

    this.facilityUpdateForm = this.fb.group({
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
      rentType: [''],
      serviceType: ['', Validators.required]
    })

    //Generate facility update form
    if (this.router.snapshot.params['id']) {
      this.facilityService.findById(this.router.snapshot.params['id']).subscribe(
        (response)=>{
          console.log(response.data[0]);
          this.facilityUpdateForm.controls['serviceId'].setValue(response.data[0].serviceId);
          this.facilityUpdateForm.controls['serviceCode'].setValue(response.data[0].serviceCode);
          this.facilityUpdateForm.controls['serviceName'].setValue(response.data[0].serviceName);
          this.facilityUpdateForm.controls['serviceImage'].setValue(response.data[0].serviceImage);
          this.facilityUpdateForm.controls['serviceArea'].setValue(response.data[0].serviceArea);
          this.facilityUpdateForm.controls['serviceCost'].setValue(response.data[0].serviceCost);
          this.facilityUpdateForm.controls['serviceMaxPeople'].setValue(response.data[0].serviceMaxPeople);
          this.facilityUpdateForm.controls['standardRoom'].setValue(response.data[0].standardRoom);
          this.facilityUpdateForm.controls['descriptionOtherConvenience'].setValue(response.data[0].descriptionOtherConvenience);
          this.facilityUpdateForm.controls['poolArea'].setValue(response.data[0].poolArea);
          this.facilityUpdateForm.controls['numberOfFloors'].setValue(response.data[0].numberOfFloors);
          this.facilityUpdateForm.controls['freeAttachedService'].setValue(response.data[0].freeAttachedService);
          this.facilityUpdateForm.controls['rentType'].setValue(response.data[0].rentType.rentTypeId);
          this.facilityUpdateForm.controls['serviceType'].setValue(response.data[0].serviceType.serviceTypeId);

        },
        (error)=>{
          confirm('Wrong service id! Input again!');
          this.route.navigateByUrl('/facilities')
        }
      );
    }

  }

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

  get serviceType() {
    return this.facilityUpdateForm.get('serviceType');
  }

  onSubmit() {
    if (this.facilityUpdateForm.invalid) {
      this.route.navigateByUrl('/update-facilities/' + this.serviceId.value);
    } else {
      this.facilityDTO = this.facilityUpdateForm.value;
      this.facilityDTO.active = 1;
      this.facilityService.update(this.facilityDTO).subscribe(
        (response) => {
          this.route.navigateByUrl('/facilities');
        },
        (error) => {
          console.log(error)
          if (!error.error.status) {
            this.serviceCode.setErrors({existed: error.error.errorMap.serviceCode});
          }
        }
      );
    }
  }


}
