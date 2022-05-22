import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BaiDangService {

  constructor(private http: HttpClient) {
  }

  postBaiDang(data: any) {
    return this.http.post<any>('http://localhost:8080/bai-dang/create', data);
  }

  getAllBaiDangs(p: number, dienTich: string, gia: string, huong: string, sort: string) {
    return this.http.get<any>(`http://localhost:8080/bai-dang/list?page=${p}&dtS=${dienTich}&gS=${gia}&hS=${huong}&s=${sort}`);
  }

  putBaiDang(id: number, data: any) {
    return this.http.put<any>('http://localhost:8080/bai-dang/update/' + id, data);
  }

  deleteBaiDang(id: number) {
    return this.http.delete<any>('http://localhost:8080/bai-dang/delete/' + id);
  }

  searchByHuong(id: number) {
    return this.http.get<any>('http://localhost:8080/bai-dang?huong.id=' + id);
  }

  searchByGia(gia: number) {
    return this.http.get<any>('http://localhost:8080/baiDang?gia_gte=' + gia);
  }

  searchByDienTich(dienTich: number) {
    return this.http.get<any>('http://localhost:8080/baiDang?dtS=' + dienTich);
  }

  searchAll(gia: number, dienTich: number, huongId: number) {
    return this.http.get<any>(`http://localhost:8080/baiDang?dienTich_gte=${gia}&gia_gte=${dienTich}&huong.id=${huongId}`);
  }
}
