import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  productUpdateRoot: Product;
  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
     this.productService.getAllProducts().subscribe(
      (response) => {
        this.products = response;
        console.log(this.products);
      },
      (error => { alert('FAILED'); }));
  }

  sendId(product: Product) {
    this.productUpdateRoot = product;
  }

  sendFlag(e: any) {
    if (e) {
      this.getAll();
    }
  }
}


