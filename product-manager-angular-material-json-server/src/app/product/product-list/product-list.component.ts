import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ProductService} from "../../services/product.service";
import {ProductDialogComponent} from "../product-dialog/product-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {ProductModalComponent} from "../product-modal/product-modal.component";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['productName','category','date','price','freshness','comment','actions'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog,
              private productService: ProductService) { }

  ngOnInit(): void {
        this.getAllProducts();
  }

  // openDialog() {
  //   this.dialog.open(ProductDialogComponent, {
  //     width: '60%'
  //   }).afterClosed().subscribe(value => {
  //     if (value === 'save') {
  //       this.getAllProducts();
  //     }
  //   });
  // }

  getAllProducts(){
    this.productService.getAllProducts().subscribe(
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  updateProduct(row: any) {
    this.dialog.open(ProductDialogComponent,{
      width: '60%',
      data: row
    }).afterClosed().subscribe(value => {
      if (value === 'update'){
        this.getAllProducts();
      }
    })
  }

  deleteProduct(row: any){
    this.dialog.open(ProductModalComponent, {
      width: '60%',
      data: row
    }).afterClosed().subscribe(value => {
      if (value === 'close'){
        this.getAllProducts();
      }
    })
  }
}
