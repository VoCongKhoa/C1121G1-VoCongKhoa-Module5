import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  deg = 0;
  r = 0;
  g = 0;
  b = 0;
  per = 0;
  colorTest3;

  setColor(){
    this.colorTest3 = {
      // 'background-color': `rgb(${this.r},${this.b},${this.g})`,
      'background': `linear-gradient(${this.deg}deg, rgb(${this.r},${this.b},${this.g}), rgb(${this.g},${this.b},${this.r}) ${this.per}%)`,
      'width': '100%',
      'height': '200px'
    }
    return this.colorTest3;
  }

  constructor() {
  }

  ngOnInit(): void {
    this.setColor();
  }

  getColorNumber1(event) {
    this.r = event.target.value;
  }

  getColorNumber2(event) {
    this.g = event.target.value;
  }

  getColorNumber3(event) {
    this.b = event.target.value;
  }


  getColorNumber0(event) {
    this.deg = event.target.value;
  }

  getColorNumber4(event) {
    this.per = event.target.value;
  }
  // this.colorTest3 = {
  //   'background': `linear-gradient(${this.deg}deg, rgb(${this.r},${this.b},${this.g}), rgb(${this.g},${this.b},${this.r}) ${this.per}%)`,
  //   'width': '100%',
  //   'height': '200px'
  // }
  // console.log(this.colorTest3);


}
