import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {FacilityService} from "../../../services/facilities";

@Component({
  selector: 'app-modal-facility',
  templateUrl: './modal-facility.component.html',
  styleUrls: ['./modal-facility.component.css']
})
export class ModalFacilityComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA,) public deleteData: any,
              private facilityService: FacilityService,
              private dialogRef: MatDialogRef<ModalFacilityComponent>,
              private router: Router) { }

  ngOnInit(): void {
  }

  deleteFacility() {
    if(this.deleteData){
      this.facilityService.delete(this.deleteData.serviceId).subscribe(
        (response)=>{
          this.dialogRef.close('close');
        },
        (error)=>{
          console.log("FAILED");
          this.router.navigateByUrl('/error/404');
        }
      );
    }
  }

}
