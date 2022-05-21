import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../services/product.service";
import {Router} from "@angular/router";
import {Category} from "../../models/Category";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],

})
export class ProductCreateComponent implements OnInit {

  freshnessList = ['Brand New', 'Second Hand', 'Refurbished'];
  productForm !: FormGroup;
  actionBtn: string = 'Save';
  categories: Category[];
  constructor(private fb: FormBuilder,
              private productService: ProductService,
              private router: Router,
              private categoryService: CategoryService) {
    this.getAllCategories();
  }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      productName: ['', [Validators.required]],
      category: ['', [Validators.required]],
      freshness: ['', [Validators.required]],
      price: ['',Validators.required],
      comment: ['', [Validators.required]],
      date: ['', [Validators.required]],
    })

  }

  addProduct() {
    console.log(this.productForm.value);
    this.productForm.value.price = Number.parseFloat(this.productForm.value.price);
      this.productService.postProduct(this.productForm.value).subscribe(
        (response)=>{
          alert('OK');
          this.router.navigateByUrl('/product/list');
        },
        (error)=>{ alert('Failed') })
  }

  getAllCategories(){
    this.categoryService.getAllCategories().subscribe(categoires => {
      this.categories = categoires
    });
  }

}
