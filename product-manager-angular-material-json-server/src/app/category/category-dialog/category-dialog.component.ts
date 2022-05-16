import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-category-dialog',
  templateUrl: './category-dialog.component.html',
  styleUrls: ['./category-dialog.component.css']
})
export class CategoryDialogComponent implements OnInit {
  categoryForm !: FormGroup;
  actionBtn: string = 'Save';

  constructor(private fb: FormBuilder,
              private categoryService: CategoryService,
              @Inject(MAT_DIALOG_DATA) public updateData : any,
              private dialogRef : MatDialogRef<CategoryDialogComponent>) { }

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]]
    })
    if(this.updateData){
      this.categoryForm.controls['id'].setValue(this.updateData.id);
      this.categoryForm.controls['name'].setValue(this.updateData.name);
      this.actionBtn = 'Update';
    }
  }
  addCategory() {
    console.log(this.categoryForm.value);
    if (!this.updateData){
      this.categoryService.postCategory(this.categoryForm.value).subscribe(
        (response)=>{
          alert('OK');
          this.categoryForm.reset();
          this.dialogRef.close('save');
        },
        (error)=>{ alert('Failed') })
    } else {
      this.updateCategory();
    }

  }

  private updateCategory() {
    this.categoryService.putCategory(this.categoryForm.value, this.updateData.id).subscribe(
      (response)=>{
        alert('OK');
        this.categoryForm.reset();
        this.dialogRef.close('update');
      },
      (error)=>{ alert('Failed') }
    );
  }
}
