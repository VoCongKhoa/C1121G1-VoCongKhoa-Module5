import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-simple-calculator',
  templateUrl: './simple-calculator.component.html',
  styleUrls: ['./simple-calculator.component.css']
})
export class SimpleCalculatorComponent implements OnInit {

  result: any;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
    switch (f.value.select) {
      case '+':
        this.result = Number.parseInt(f.value.first) + Number.parseInt(f.value.second);
        break;
      case '-':
        this.result = Number.parseInt(f.value.first) - Number.parseInt(f.value.second);
        break;
      case 'x':
        this.result = Number.parseInt(f.value.first) * Number.parseInt(f.value.second);
        break;
      case ':':
        if (Number.parseInt(f.value.second) == 0){
          this.result = 'Second number can not be 0';
        }else {
          this.result = Number.parseInt(f.value.first) / Number.parseInt(f.value.second);
          break;
        }
    }
  }
}
