import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  private deg = 0;
  private r = 0;
  private g = 0;
  private b = 0;
  private per = 0;

  private colorTest3;

  constructor() {
  }

  ngOnInit(): void {
    this.colorTest3 = {
      'background': `linear-gradient(${this.deg}deg, rgb(${this.r},${this.b},${this.g}), rgb(${this.g},${this.b},${this.r}) ${this.per}%)`,
      'width': '100%',
      'height': '200px'
    }
    console.log(this.colorTest3)
  }

  getColorNumber1(event) {
    this.r = event.target.value;
    this.colorTest3 = {
      // 'background-color': `rgb(${this.r},${this.b},${this.g})`,
      'background': `linear-gradient(${this.deg}deg, rgb(${this.r},${this.b},${this.g}), rgb(${this.g},${this.b},${this.r}) ${this.per}%)`,
      'width': '100%',
      'height': '200px'
    }
    console.log(this.colorTest3);
  }

  getColorNumber2(event) {
    this.g = event.target.value;
    this.colorTest3 = {
      'background': `linear-gradient(${this.deg}deg, rgb(${this.r},${this.b},${this.g}), rgb(${this.g},${this.b},${this.r}) ${this.per}%)`,
      'width': '100%',
      'height': '200px'
    }
    console.log(this.colorTest3);
  }

  getColorNumber3(event) {
    this.b = event.target.value;
    // console.log(this.colorTest3);
    this.colorTest3 = {
      'background': `linear-gradient(${this.deg}deg, rgb(${this.r},${this.b},${this.g}), rgb(${this.g},${this.b},${this.r}) ${this.per}%)`,
      'width': '100%',
      'height': '200px'
    }
    console.log(this.colorTest3);
  }


  getColorNumber0(event) {
    this.deg = event.target.value;
    this.colorTest3 = {
      'background': `linear-gradient(${this.deg}deg, rgb(${this.r},${this.b},${this.g}), rgb(${this.g},${this.b},${this.r}) ${this.per}%)`,
      'width': '100%',
      'height': '200px'
    }
    console.log(this.colorTest3);
  }

  getColorNumber4(event) {
    this.per = event.target.value;
    this.colorTest3 = {
      'background': `linear-gradient(${this.deg}deg, rgb(${this.r},${this.b},${this.g}), rgb(${this.g},${this.b},${this.r}) ${this.per}%)`,
      'width': '100%',
      'height': '200px'
    }
    console.log(this.colorTest3);
  }
}
