import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DanhMucService} from "../services/danh-muc.service";
import {VungMienService} from "../services/vung-mien.service";
import {BaiDangService} from "../services/bai-dang.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Huong} from "../models/huong";
import {HuongService} from "../services/huong.service";
import {BaiDangUpdateComponent} from "./bai-dang-update/bai-dang-update.component";
import {BaiDangDeleteComponent} from "./bai-dang-delete/bai-dang-delete.component";
import {BaiDang} from "../models/baiDang";

@Component({
  selector: 'app-bai-dang',
  templateUrl: './bai-dang.component.html',
  styleUrls: ['./bai-dang.component.css']
})
export class BaiDangComponent implements OnInit {
  baiDangList: BaiDang[] = [];
  searchForm: FormGroup;
  huongList: Huong[];
  pageNumber: number = 0;
  first: boolean = true;
  totalPages: any;
  last: boolean;

  constructor(public dialog: MatDialog,
              private danhMucService: DanhMucService,
              private vungMienService: VungMienService,
              private baiDangService: BaiDangService,
              private huongService: HuongService,
              private fb: FormBuilder) {


  }

  ngOnInit(): void {
    this.getAllBaiDangs('','','');
    this.getAllHuongs();
    this.searchForm = this.fb.group({
      dienTichSearch: [''],
      huongSearch: [''],
      giaSearch: ['']
    })
  }

  getAllHuongs() {
    this.huongService.getAllHuongs().subscribe(
      (response) => {
        this.huongList = response.data;
      },
      (error) => {
        alert('FAILED')
      }
    )
  }

  getAllBaiDangs(dienTich: string, gia: string, huong: string) {
    this.baiDangService.getAllBaiDangs(this.pageNumber,dienTich,gia,huong).subscribe(
      (response) => {
        this.first = response.first;
        this.totalPages = response.totalPages;
        this.totalPages = Array(this.totalPages).fill(1).map((x, i) => i + 1); //[1, 2, 3, 4, 5]
        this.last = (response.pageable.offset + response.pageable.pageSize) >= response.totalElements;
        this.baiDangList = response.content;
      },
      (error) => {
        alert('FAILED');
      },
    )
  }

  search() {
    if (isNaN(this.searchForm.value.dienTichSearch) || this.searchForm.value.dienTichSearch.trim == '') {
      this.searchForm.get('dienTichSearch').setErrors({number: 'Ban phai nhap so!'})
    }
    if (isNaN(this.searchForm.value.huongSearch) || this.searchForm.value.huongSearch.trim == '') {
      this.searchForm.get('huongSearch').setErrors({number: 'Ban phai nhap so!'})
    }
    if (isNaN(this.searchForm.value.giaSearch) || this.searchForm.value.giaSearch.trim == '') {
      this.searchForm.get('giaSearch').setErrors({number: 'Ban phai nhap so!'})
    }
    this.getAllBaiDangs(this.searchForm.value.dienTichSearch,this.searchForm.value.giaSearch,this.searchForm.value.huongSearch)
  }

  updateBaiDang(row: any) {
    this.dialog.open(BaiDangUpdateComponent, {
      width: '60%',
      data: row
    }).afterClosed().subscribe(value => {
      if (value === 'update') {
        this.getAllBaiDangs('','','');
      }
    })
  }

  deleteBaiDang(row: any) {
    this.dialog.open(BaiDangDeleteComponent, {
      width: '60%',
      data: row
    }).afterClosed().subscribe(value => {
      if (value === 'close') {
        this.getAllBaiDangs('','','');
      }
    })
  }

  next() {
    this.pageNumber++;
    this.getAllBaiDangs(this.searchForm.value.dienTichSearch,this.searchForm.value.giaSearch,this.searchForm.value.huongSearch)
  }

  previous() {
    this.pageNumber--;
    this.getAllBaiDangs(this.searchForm.value.dienTichSearch,this.searchForm.value.giaSearch,this.searchForm.value.huongSearch)
  }

  getBaiDangPaging(index: any) {
    this.pageNumber = index - 1;
    this.getAllBaiDangs(this.searchForm.value.dienTichSearch,this.searchForm.value.giaSearch,this.searchForm.value.huongSearch)
  }

  refresh() {
    this.searchForm.reset();
    this.ngOnInit();
  }
}
