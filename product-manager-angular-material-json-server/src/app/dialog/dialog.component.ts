import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../services/api.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  freshnessList = ['Brand New', 'Second Hand', 'Refurbished'];
  productForm !: FormGroup;
  actionBtn: string = 'Save';
  constructor(private fb: FormBuilder,
              private apiService: ApiService,
              @Inject(MAT_DIALOG_DATA) public updateData : any,
              private dialogRef : MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      productName: ['', [Validators.required]],
      category: ['', [Validators.required]],
      freshness: ['', [Validators.required]],
      price: ['', [Validators.required]],
      comment: ['', [Validators.required]],
      date: ['', [Validators.required]],
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
  }

  addProduct() {
    console.log(this.productForm.value);
    if (!this.updateData){
      this.apiService.postProduct(this.productForm.value).subscribe(
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

  private updateProduct() {
    this.apiService.putProduct(this.productForm.value, this.updateData.id).subscribe(
      (response)=>{
        alert('OK');
        this.productForm.reset();
        this.dialogRef.close('update');
      },
      (error)=>{ alert('Failed') }
      );
  }
}
