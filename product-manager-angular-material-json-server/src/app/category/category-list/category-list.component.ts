import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {CategoryService} from "../../services/category.service";
import {MatDialog} from "@angular/material/dialog";
import {CategoryDialogComponent} from "../category-dialog/category-dialog.component";
import {CategoryModalComponent} from "../category-modal/category-modal.component";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['id','name','actions'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private categoryService: CategoryService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllProducts(){
    this.categoryService.getAllCategories().subscribe(
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
    this.dialog.open(CategoryDialogComponent,{
      width: '60%',
      data: row
    }).afterClosed().subscribe(value => {
      if (value === 'update'){
        this.getAllProducts();
      }
    })
  }

  deleteProduct(row: any){
    this.dialog.open(CategoryModalComponent, {
      width: '60%',
      data: row
    }).afterClosed().subscribe(value => {
      if (value === 'close'){
        this.getAllProducts();
      }
    })
  }
}
