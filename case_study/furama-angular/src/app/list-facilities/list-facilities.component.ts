import {Component, Input, OnInit} from '@angular/core';
import { FacilityService} from "../../services/facilities";
import { Facility } from "../../models/facility"
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-list-facilities',
  templateUrl: './list-facilities.component.html',
  styleUrls: ['./list-facilities.component.css']
})
export class ListFacilitiesComponent implements OnInit {

  facilities: Facility[] = [];
  p: number = 1;
  facilityRoot: Facility;
  constructor(private facilityService: FacilityService) {
    this.getFacilities();
  }

  ngOnInit(): void {
    this.getFacilities();
  }


  getFacilities(){
    this.facilityService.getAllFacilities().subscribe(
      (response: Facility[]) => {
        this.facilities = response;
        console.log(response)
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    )
  }


  sendDelete(f: Facility) {
    this.facilityRoot = f;
  }

  confirmDelete(e: any) {
    if (e){
      this.getFacilities();
    }
  }
}
