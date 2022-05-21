import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DialogComponent} from "../../dialog/dialog.component";
import {MatTableDataSource} from "@angular/material/table";
import {ProductService} from "../../services/product.service";
import {ProductModalComponent} from "../product-modal/product-modal.component";
import {Category} from "../../models/Category";
import {CategoryService} from "../../services/category.service";
import {checkAge} from "../../services/checkAge";

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.css']
})
export class ProductDialogComponent implements OnInit {

  freshnessList = ['Brand New', 'Second Hand', 'Refurbished'];
  productForm !: FormGroup;
  actionBtn: string = 'Save';
  categories: Category[];
  // selected: Category;

  constructor(private fb: FormBuilder,
              private productService: ProductService,
              @Inject(MAT_DIALOG_DATA) public updateData : any,
              private dialogRef : MatDialogRef<ProductDialogComponent>,
              private categoryService: CategoryService) {
    console.log(updateData)
    this.getAllCategiries();
  }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      productName: ['', [Validators.required]],
      category: ['', [Validators.required]],
      freshness: ['', [Validators.required]],
      price: ['', [Validators.required]],
      comment: ['', [Validators.required]],
      date: ['', [Validators.required, checkAge]],
    })
    if(this.updateData){
      this.productForm.controls['productName'].setValue(this.updateData.productName);
      this.productForm.controls['category'].setValue(this.updateData.category);
      this.productForm.controls['freshness'].setValue(this.updateData.freshness);
      this.productForm.controls['price'].setValue(this.updateData.price);
      this.productForm.controls['comment'].setValue(this.updateData.comment);
      this.productForm.controls['date'].setValue(this.updateData.date);
      this.actionBtn = 'Update';
    }
    // this.selected = this.updateData.category;
  }

  compareFn(c1: Category, c2: Category): boolean{
    // console.log(c1 && c2 ? c1.id == c2.id : c1 == c2);
    // return c1 && c2 ? c1.id == c2.id : c1 == c2;
    console.log("a")
    return c1.id == c2.id;
  };

  addProduct() {
    // console.log(this.productForm.value);
    if (!this.updateData){
      this.productService.postProduct(this.productForm.value).subscribe(
        (response)=>{
          alert('OK');
          this.productForm.reset();
          this.dialogRef.close('save');
        },
        (error)=>{ alert('Failed') })
    } else {
      this.updateProduct();
    }

  }

  updateProduct() {
    if (this.productForm.valid){
      this.productForm.value.price = Number.parseFloat(this.productForm.value.price);
      this.productService.putProduct(this.productForm.value, this.updateData.id).subscribe(
        (response)=>{
          alert('OK');
          this.productForm.reset();
          this.dialogRef.close('update');
        },
        (error)=>{ alert('Failed') }
      );
    } else {
      alert('Failed');
    }

  }

  getAllCategiries() {
    this.categoryService.getAllCategories().subscribe(
      (response)=>{
        this.categories = response;
      }
    );
  }
}
