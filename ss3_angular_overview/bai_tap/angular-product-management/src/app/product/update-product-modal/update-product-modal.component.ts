import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-update-product-modal',
  templateUrl: './update-product-modal.component.html',
  styleUrls: ['./update-product-modal.component.css']
})
export class UpdateProductModalComponent implements OnInit {
  // @Input('') idUpdate: number;
  productUpdateForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.productUpdateForm = this.fb.group({
      idUpdate: [''],
      nameUpdate: [''],
      priceUpdate: [''],
      descriptionUpdate: ['']
    });
  }

  sendId(id: number) {
    // this.productUpdateForm.setValue(['idUpdate', id]);
  }

  updateProduct() {
    console.log(this.productUpdateForm);
  }
}
