import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productCreateForm: FormGroup = new FormGroup({
    idCreate: new FormControl(),
    nameCreate: new FormControl(),
    priceCreate: new FormControl(),
    descriptionCreate: new FormControl(),
  });

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
  }

  submit() {
    const product = this.productCreateForm.value;
    this.productService.saveProduct(product);
    this.productCreateForm.reset();
  }
}
