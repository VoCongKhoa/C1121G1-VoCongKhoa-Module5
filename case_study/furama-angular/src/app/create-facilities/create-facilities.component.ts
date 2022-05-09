import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-facilities',
  templateUrl: './create-facilities.component.html',
  styleUrls: ['./create-facilities.component.css']
})
export class CreateFacilitiesComponent implements OnInit {
  check = 0;

  constructor() { }

  ngOnInit(): void {

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
}
