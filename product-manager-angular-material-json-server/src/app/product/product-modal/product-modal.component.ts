import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css']
})
export class ProductModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA,) public deleteData: any,
              private productService: ProductService,
              private dialogRef: MatDialogRef<ProductModalComponent>) { }

  ngOnInit(): void {
  }
  deleteProduct() {
    if(this.deleteData){
      this.productService.deleteProduct(this.deleteData.id).subscribe(
        (response)=>{
          alert("OK");
          this.dialogRef.close('close');
        },
        (error)=>{ alert("FAILED") }
      );
    }
  }
}
