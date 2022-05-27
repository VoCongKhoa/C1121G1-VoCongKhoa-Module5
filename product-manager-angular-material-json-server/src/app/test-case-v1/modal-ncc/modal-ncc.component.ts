import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-ncc',
  templateUrl: './modal-ncc.component.html',
  styleUrls: ['./modal-ncc.component.css']
})
export class ModalNccComponent implements OnInit {
  list: any;
  currentCompany: any;

  constructor() {
    this.list = [1,2,3,4,5,6,7,8,9]
  }

  ngOnInit(): void {
  }


  chooseSupplier(item: any) {
    this.currentCompany = item.name;
    console.log(item)
  }
}
