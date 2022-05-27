import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-nhap-kho',
  templateUrl: './nhap-kho.component.html',
  styleUrls: ['./nhap-kho.component.css']
})
export class NhapKhoComponent implements OnInit {

  @ViewChild('modal') modal;

  constructor() { }

  ngOnInit(): void {
  }

  openModal() {
    console.log(document.getElementById('exampleModal'));
    console.log('a');
    console.log(this.modal.value)
  }
}
