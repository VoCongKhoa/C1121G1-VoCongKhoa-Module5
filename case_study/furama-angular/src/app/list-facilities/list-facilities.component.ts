import { Component, OnInit } from '@angular/core';
import { FacilityService} from "../../services/facilities";
import { Facility } from "../../models/facility"

@Component({
  selector: 'app-list-facilities',
  templateUrl: './list-facilities.component.html',
  styleUrls: ['./list-facilities.component.css']
})
export class ListFacilitiesComponent implements OnInit {

  // @ts-ignore
  // facilityList: InstanceType<typeof facilityList>;
  facilities: Facility[] = [];
  constructor(private facilityService: FacilityService) {
    this.getFacilities();
  }

  ngOnInit(): void {
  }

  getFacilities(){
    this.facilities = this.facilityService.getFacilities();
  }


}
