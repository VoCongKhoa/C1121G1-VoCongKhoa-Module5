import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DanhMucService {

  constructor(private http: HttpClient) { }

  postDanhMuc(data: any){
    return this.http.post<any>('http://localhost:3000/danhMuc/', data);
  }
  getAllDanhMucs(){
    return this.http.get<any>('http://localhost:8080/danh-muc/list');
  }

  putDanhMuc(data: any, id: number) {
    return this.http.put<any>('http://localhost:3000/danhMuc/'+id, data);
  }

  deleteDanhMuc(id: number){
    return this.http.delete<any>('http://localhost:3000/danhMuc/'+id);
  }
}
