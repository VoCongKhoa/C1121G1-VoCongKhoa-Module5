import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-category-modal',
  templateUrl: './category-modal.component.html',
  styleUrls: ['./category-modal.component.css']
})
export class CategoryModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA,) public deleteData: any,
              private categoryService: CategoryService,
              private dialogRef: MatDialogRef<CategoryModalComponent>) { }

  ngOnInit(): void {
  }
  deleteCategory() {
    if(this.deleteData){
      this.categoryService.deleteCategory(this.deleteData.id).subscribe(
        (response)=>{
          alert("OK");
          this.dialogRef.close('close');
        },
        (error)=>{ alert("FAILED") }
      );
    }
  }

}
