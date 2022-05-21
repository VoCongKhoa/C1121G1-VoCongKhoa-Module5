import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import {FormBuilder} from "@angular/forms";
import {ProductService} from "../../services/product.service";
import {CategoryService} from "../../services/category.service";
import {Category} from "../../models/category";
import {ProductDialogComponent} from "../product-dialog/product-dialog.component";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  displayedColumns: string[] = ['productName','category','date','price','freshness','comment','actions'];
  dataSource !: MatTableDataSource<any>;

  categoryList !: Category[];
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  constructor(public dialog: MatDialog,
              private productService: ProductService,
              private categoryService: CategoryService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategories();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllCategories(){
    this.categoryService.getAllCategories().subscribe(
      (response)=>{ this.categoryList = response;},
      (error)=>{ alert('FAILED')}
    )
  }

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
    // this.dialog.open(ProductModalComponent, {
    //   width: '60%',
    //   data: row
    // }).afterClosed().subscribe(value => {
    //   if (value === 'close'){
    //     this.getAllProducts();
    //   }
    // })
  }
}
