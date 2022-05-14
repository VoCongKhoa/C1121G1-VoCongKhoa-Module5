import {Component, Input, OnInit} from '@angular/core';
import {Facility} from "../../../models/facility";

@Component({
  selector: 'app-facility-modal',
  templateUrl: './facility-modal.component.html',
  styleUrls: ['./facility-modal.component.css']
})
export class FacilityModalComponent implements OnInit {

  @Input('facilityChild') facilityDelete: Facility;
  constructor() { }

  ngOnInit(): void {
  }

  delete() {

  }
}
