import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VungMienService {

  constructor(private http: HttpClient) { }

  postVungMien(data: any){
    return this.http.post<any>('http://localhost:3000/vungMien/', data);
  }
  getAllVungMiens(){
    return this.http.get<any>('http://localhost:8080/vung-mien/list');
  }

  putVungMien(data: any, id: number) {
    return this.http.put<any>('http://localhost:3000/vungMien/'+id, data);
  }

  deleteVungMien(id: number){
    return this.http.delete<any>('http://localhost:3000/vungMien/'+id);
  }
}
