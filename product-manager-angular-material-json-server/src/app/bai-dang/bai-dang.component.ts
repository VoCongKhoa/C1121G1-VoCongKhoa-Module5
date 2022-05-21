import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import {DanhMucService} from "../services/danh-muc.service";
import {VungMienService} from "../services/vung-mien.service";
import {BaiDangService} from "../services/bai-dang.service";
import {DanhMuc} from "../models/danhMuc";
import {VungMien} from "../models/vungMien";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Huong} from "../models/huong";
import {HuongService} from "../services/huong.service";

@Component({
  selector: 'app-bai-dang',
  templateUrl: './bai-dang.component.html',
  styleUrls: ['./bai-dang.component.css']
})
export class BaiDangComponent implements OnInit {
  dataSource : MatTableDataSource<any>;
  displayedColumns: string[] = ['id','tieuDe','danhMuc','vungMien','banLa','huong','tinhTrang','diaChi','dienTich','gia','noiDung','hinhAnh','tacVu'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  danhMucList: DanhMuc[];
  vungMienList: VungMien[];
  searchForm: FormGroup;
  huongList: Huong[];
  constructor(public dialog: MatDialog,
              private danhMucService: DanhMucService,
              private vungMienService: VungMienService,
              private baiDangService: BaiDangService,
              private huongService: HuongService,
              private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      dienTichSearch:[''],
      huongSearch:['0'],
      giaSearch:[]
    })

  }

  ngOnInit(): void {
    this.getAllDanhMucs();
    this.getAllVungMiens();
    this.getAllBaiDangs();
    this.getAllHuongs();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllDanhMucs(){
    this.danhMucService.getAllDanhMucs().subscribe(
      (response)=>{ this.danhMucList = response;},
      (error)=>{ alert('FAILED')}
    )
  }
  getAllVungMiens(){
    this.vungMienService.getAllVungMiens().subscribe(
      (response)=>{ this.vungMienList = response;},
      (error)=>{ alert('FAILED')}
    )
  }

  getAllHuongs(){
    this.huongService.getAllHuongs().subscribe(
      (response)=>{ this.huongList = response;},
      (error)=>{ alert('FAILED')}
    )
  }

  getAllBaiDangs(){
    this.baiDangService.getAllBaiDangs().subscribe(
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

  search() {
    console.log(this.searchForm.value.huongSearch)
    if (this.searchForm.value.giaSearch != ''){
      let dienTichSearch = Number.parseInt(this.searchForm.value.dienTichSearch);
      this.baiDangService.searchByDienTich(dienTichSearch).subscribe(
        (response)=>{
          this.dataSource = new MatTableDataSource<any>(response);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        (error)=>{
          alert('FAILED');
        },
      )
    }
    // else if (this.searchForm.value.huongSearch != 0){
    //   console.log(this.searchForm.value.huongSearch)
    //   this.baiDangService.searchByHuong(this.searchForm.value.huongSearch).subscribe(
    //     (response)=>{
    //       this.dataSource = new MatTableDataSource<any>(response);
    //       this.dataSource.paginator = this.paginator;
    //       this.dataSource.sort = this.sort;
    //     },
    //     (error)=>{
    //       alert('FAILED');
    //     },
    //   )
    // } else if (this.searchForm.value.giaSearch != null){
    //   let giaSearch = Number.parseInt(this.searchForm.value.giaSearch);
    //   this.baiDangService.searchByGia(giaSearch).subscribe(
    //     (response)=>{
    //       this.dataSource = new MatTableDataSource<any>(response);
    //       this.dataSource.paginator = this.paginator;
    //       this.dataSource.sort = this.sort;
    //     },
    //     (error)=>{
    //       alert('FAILED');
    //     },
    //   )
    // } else if (this.searchForm.value.giaSearch != '' && this.searchForm.value.huongSearch != '0' && this.searchForm.value.giaSearch != null){
    //   console.log('a')
    //   let giaSearch = Number.parseInt(this.searchForm.value.giaSearch);
    //   let dienTichSearch = Number.parseInt(this.searchForm.value.dienTichSearch);
    //   this.baiDangService.searchAll(giaSearch, dienTichSearch, this.searchForm.value.huongSearch).subscribe(
    //     (response)=>{
    //       this.dataSource = new MatTableDataSource<any>(response);
    //       this.dataSource.paginator = this.paginator;
    //       this.dataSource.sort = this.sort;
    //     },
    //     (error)=>{
    //       alert('FAILED');
    //     },
    //   )
    // }
    if (this.searchForm.value.huongSearch != '0'){
      this.baiDangService.searchByHuong(this.searchForm.value.huongSearch).subscribe(
        (response)=>{
          this.dataSource = new MatTableDataSource<any>(response);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        (error)=>{
          alert('FAILED');
        },
      )
    }

    if (this.searchForm.value.giaSearch != null){
      let giaSearch = Number.parseInt(this.searchForm.value.giaSearch);
      this.baiDangService.searchByGia(giaSearch).subscribe(
        (response)=>{
          this.dataSource = new MatTableDataSource<any>(response);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        (error)=>{
          alert('FAILED');
        },
      )
    }

    // if (this.searchForm.value.giaSearch != '' && this.searchForm.value.huongSearch != '0' && this.searchForm.value.giaSearch != null){
    //   console.log('a')
    //   let giaSearch = Number.parseInt(this.searchForm.value.giaSearch);
    //   let dienTichSearch = Number.parseInt(this.searchForm.value.dienTichSearch);
    //   this.baiDangService.searchAll(giaSearch, dienTichSearch, this.searchForm.value.huongSearch).subscribe(
    //     (response)=>{
    //       this.dataSource = new MatTableDataSource<any>(response);
    //       this.dataSource.paginator = this.paginator;
    //       this.dataSource.sort = this.sort;
    //     },
    //     (error)=>{
    //       alert('FAILED');
    //     },
    //   )
    // }

  }
}
