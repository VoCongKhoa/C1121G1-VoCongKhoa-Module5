import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  r = 0;
  g = 0;
  b = 0;

  constructor() { }

  ngOnInit(): void {
  }

  getColorNumber1(event) {
    this.r = event.target.value
  }
  getColorNumber2(event) {
    this.g = event.target.value
  }
  getColorNumber3(event) {
    this.b = event.target.value
  }

}
