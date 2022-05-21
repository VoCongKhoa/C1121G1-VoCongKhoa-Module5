import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {ModalFacilityComponent} from "./modal-facility/modal-facility.component";
import {FacilityService} from "../../services/facilities";
import {Facility} from "../../models/facility";

@Component({
  selector: 'app-list-facilities',
  templateUrl: './list-facilities.component.html',
  styleUrls: ['./list-facilities.component.css']
})
export class ListFacilitiesComponent implements OnInit {

  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['customerId','customerCode','customerName','customerBirthday','customerGender','customerIdCard','customerPhone','actions'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  facilities: Facility[] = [];
  p: number = 1;
  facilityRoot: Facility;
  constructor(public dialog: MatDialog, private facilityService: FacilityService, private router: Router) {
    this.getFacilities();
  }

  ngOnInit(): void {
    this.getFacilities();
  }


  getFacilities(){
    this.facilityService.getAllFacilities().subscribe(
      (response: Facility[]) => {
        this.facilities = response;
        this.dataSource = new MatTableDataSource<any>(response);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (error: HttpErrorResponse) => {
        console.log('Failed');
        this.router.navigateByUrl('/error/404');
      }
    )
  }


  sendDelete(f: Facility) {
    this.facilityRoot = f;
  }

  confirmDelete(e: any) {
    if (e){
      this.getFacilities();
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteFacility(row: any){
    this.dialog.open(ModalFacilityComponent,{
      width: '60%',
      data: row
    }).afterClosed().subscribe((response)=>{ this.getFacilities();});
  }
}
