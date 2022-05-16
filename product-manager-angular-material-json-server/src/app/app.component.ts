import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "./dialog/dialog.component";
import {ApiService} from "./services/api.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {ProductDialogComponent} from "./product/product-dialog/product-dialog.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'product-manager-angular-material-json-server';
  dataSource: MatTableDataSource<any>;
  // displayedColumns: string[] = ['productName','category','date','price','freshness','comment','actions'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog,
              private apiService: ApiService,
              ) {}

  ngOnInit(): void {
    this.getAllProducts();
  }
  openDialog() {
    this.dialog.open(ProductDialogComponent, {
      width: '60%'
    }).afterClosed().subscribe(value => {
      if (value === 'save') {
        this.getAllProducts();
      }
    });
  }

  getAllProducts(){
    this.apiService.getAllProducts().subscribe(
      (response)=>{
        console.log('OK');
        this.dataSource = new MatTableDataSource<any>(response);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (error)=>{
        alert('FAILED');
      },
      )
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  //
  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }

  // updateProduct(row: any) {
  //   this.dialog.open(ProductDialogComponent,{
  //     width: '60%',
  //     data: row
  //   }).afterClosed().subscribe(value => {
  //     if (value === 'update'){
  //       this.getAllProducts();
  //     }
  //   })
  // }

  // deleteProduct(row: any){
  //     this.dialog.open(ModalComponent, {
  //       width: '60%',
  //       data: row
  //     }).afterClosed().subscribe(value => {
  //       if (value === 'close'){
  //         this.getAllProducts();
  //       }
  //     })
  // }
}
