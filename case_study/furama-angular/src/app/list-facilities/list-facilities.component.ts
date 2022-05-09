import { Component, OnInit } from '@angular/core';
import { facilityList } from "../facilities";
import { Facility } from "../../models/facility"

@Component({
  selector: 'app-list-facilities',
  templateUrl: './list-facilities.component.html',
  styleUrls: ['./list-facilities.component.css']
})
export class ListFacilitiesComponent implements OnInit {

  // @ts-ignore
  // facilityList: InstanceType<typeof facilityList>;
  facilityList = facilityList;
  constructor() { }

  ngOnInit(): void {
  }


}
