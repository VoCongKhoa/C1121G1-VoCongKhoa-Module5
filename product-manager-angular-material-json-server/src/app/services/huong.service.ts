import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HuongService {

  constructor(private http: HttpClient) { }

  postHuong(data: any){
    return this.http.post<any>('http://localhost:3000/huong/', data);
  }
  getAllHuongs(){
    return this.http.get<any>('http://localhost:8080/huong/list');
  }

  putHuong(data: any, id: number) {
    return this.http.put<any>('http://localhost:3000/huong/'+id, data);
  }

  deleteHuong(id: number){
    return this.http.delete<any>('http://localhost:3000/huong/'+id);
  }
}
