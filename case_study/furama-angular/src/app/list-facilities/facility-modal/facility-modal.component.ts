import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {Facility} from "../../models/facility";
import {HttpErrorResponse} from "@angular/common/http";
import {FacilityService} from "../../services/facilities";

@Component({
  selector: 'app-facility-modal',
  templateUrl: './facility-modal.component.html',
  styleUrls: ['./facility-modal.component.css']
})
export class FacilityModalComponent implements OnInit, OnChanges {

  @Input('facilityChild') facilityDelete!: Facility;
  @Output() flagDelete = new EventEmitter();
  @ViewChild('btnDeleteClose') btnDeleteClose;
  constructor(private facilityService: FacilityService) { }

  ngOnInit(): void {
    this. facilityDelete = {
        serviceId: 1,
        serviceCode: "",
        serviceName: "",
        serviceImage: "",
        serviceArea: 0,
        serviceCost: 0,
        serviceMaxPeople: 0,
        standardRoom: "",
        descriptionOtherConvenience: "",
        poolArea: 0,
        numberOfFloors: 0,
        freeAttachedService: "",
        rentType: {
          rentTypeId: 3,
          rentTypeName: "day",
          rentTypeCost: 10000000,
          active: 1
        },
        serviceTypeId: 1,
        active: 1
      }
  }

  delete() {
    this.facilityService.delete(this.facilityDelete.serviceId).subscribe(
      (response: void) => {
        this.facilityService.getAllFacilities();
        this.flagDelete.emit(true);
      },
      (error: HttpErrorResponse) => {
        alert("Failed");
      });
    this.btnDeleteClose.nativeElement.click();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
    if ('facilityDelete' in changes) {
      let facilityTemp: Facility = changes.facilityDelete.currentValue;
      facilityTemp = typeof facilityTemp === 'undefined' ? null : facilityTemp;
      if (facilityTemp != null) {
        this.facilityService.getAllFacilities();
      }
    }
  }
}
