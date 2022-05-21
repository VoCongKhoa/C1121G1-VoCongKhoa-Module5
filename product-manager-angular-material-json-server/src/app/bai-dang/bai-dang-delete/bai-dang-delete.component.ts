import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ProductService} from "../../services/product.service";
import {BaiDangService} from "../../services/bai-dang.service";

@Component({
  selector: 'app-bai-dang-delete',
  templateUrl: './bai-dang-delete.component.html',
  styleUrls: ['./bai-dang-delete.component.css']
})
export class BaiDangDeleteComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA,) public deleteData: any,
              private baiDangService: BaiDangService,
              private dialogRef: MatDialogRef<BaiDangDeleteComponent>) { }

  ngOnInit(): void {
  }

  deleteBaiDang() {
    if(this.deleteData){
      this.baiDangService.deleteBaiDang(this.deleteData.id).subscribe(
        (response)=>{
          alert("OK");
          this.dialogRef.close('close');
        },
        (error)=>{ alert("FAILED") }
      );
    }
  }

}
