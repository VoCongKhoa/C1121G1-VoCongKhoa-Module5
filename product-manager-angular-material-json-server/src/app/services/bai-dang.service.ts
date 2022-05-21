import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BaiDangService {

  constructor(private http: HttpClient) { }

  postBaiDang(data: any){
    return this.http.post<any>('http://localhost:3000/baiDang/', data);
  }
  getAllBaiDangs(){
    return this.http.get<any>('http://localhost:3000/baiDang');
  }

  putBaiDang(data: any, id: number) {
    return this.http.put<any>('http://localhost:3000/baiDang/'+id, data);
  }

  deleteBaiDang(id: number){
    return this.http.delete<any>('http://localhost:3000/baiDang/'+id);
  }

  searchByHuong(id: number) {
    return this.http.get<any>('http://localhost:3000/baiDang?huong.id='+id);
  }

  searchByGia(gia: number) {
    return this.http.get<any>('http://localhost:3000/baiDang?gia_gte='+gia);
  }

  searchByDienTich(dienTich: number) {
    return this.http.get<any>('http://localhost:3000/baiDang?dienTich_gte='+dienTich);
  }

  searchAll(gia: number, dienTich: number, huongId: number) {
    return this.http.get<any>(`http://localhost:3000/baiDang?dienTich_gte=${gia}&gia_gte=${dienTich}&huong.id=${huongId}`);
  }
}
