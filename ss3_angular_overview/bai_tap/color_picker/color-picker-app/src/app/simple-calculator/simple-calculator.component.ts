import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-simple-calculator',
  templateUrl: './simple-calculator.component.html',
  styleUrls: ['./simple-calculator.component.css']
})
export class SimpleCalculatorComponent implements OnInit {

  result: any;
  sumString = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  // FORM SUBMIT
  // onSubmit(f: NgForm) {
  //   console.log(f.value);
  //   switch (f.value.select) {
  //     case '+':
  //       this.result = eval('f.value.first + f.value.second');
  //       break;
  //     case '-':
  //       this.result = eval('f.value.first - f.value.second');
  //       break;
  //     case 'x':
  //       this.result = eval('f.value.first * f.value.second');
  //       break;
  //     case ':':
  //       if (Number.parseInt(f.value.second) == 0) {
  //         this.result = 'Second number can not be 0';
  //       } else {
  //         this.result = eval('f.value.first / f.value.second');
  //         break;
  //       }
  //   }
  // }

  getNumber(str) {
    this.sumString += str;
  }

  calculate() {
    this.sumString = eval(this.sumString);
    if (this.sumString == 'Infinity') {
      this.sumString = 'N/A';
    }
    return this.sumString;
  }

  clear() {
    this.sumString = '';
    return this.sumString;
  }
}
