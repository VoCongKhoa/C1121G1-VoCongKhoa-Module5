import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ProductService} from "../../services/product.service";
import {ProductDialogComponent} from "../product-dialog/product-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {ProductModalComponent} from "../product-modal/product-modal.component";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Category} from "../../models/Category";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  dataSource !: MatTableDataSource<any>;
  displayedColumns: string[] = ['productName','category','date','price','freshness','comment','actions'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  searchForm: FormGroup;
  categoryList: Category[];

  constructor(public dialog: MatDialog,
              private productService: ProductService,
              private categoryService: CategoryService,
              private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      nameSearch:[''],
      dateSearch:[''],
      categorySearch:['0'],
      priceSearch:[]
    })
  }

  ngOnInit(): void {
        this.getAllProducts();
        this.getAllCategories();
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

  search() {
    this.productService.searchByName(this.searchForm.value.nameSearch).subscribe(
      (response)=>{
        console.log("a")
        this.dataSource = new MatTableDataSource<any>(response);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (error)=>{
        alert('FAILED');
      },
    );
    this.productService.searchByCategory(this.searchForm.value.categorySearch).subscribe(
      (response)=>{
        console.log("a")
        this.dataSource = new MatTableDataSource<any>(response);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (error)=>{
        alert('FAILED');
      },
    )
    if (this.searchForm.value.priceSearch != ''){
      let priceSearch = (this.searchForm.value.priceSearch).toString();
      this.productService.searchByPrice(priceSearch).subscribe(
        (response)=>{
          console.log(this.searchForm.value.priceSearch)
          console.log("a")
          this.dataSource = new MatTableDataSource<any>(response);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        (error)=>{
          alert('FAILED');
        },
      )
    }

    this.productService.searchByDate(this.searchForm.value.dateSearch).subscribe(
      (response)=>{
        console.log("a")
        this.dataSource = new MatTableDataSource<any>(response);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (error)=>{
        alert('FAILED');
      },
    )


  }
}
