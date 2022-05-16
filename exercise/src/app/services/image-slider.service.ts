import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ImageSliderService {

  constructor(private http: HttpClient) { }
  postSlider(data: any){
    return this.http.post<any>('http://localhost:3000/srcList/', data);
  }
  getAllSliders(){
    return this.http.get<any>('http://localhost:3000/srcList');
  }

  putSlider(data: any, id: number) {
    return this.http.put<any>('http://localhost:3000/srcList/'+id, data);
  }

  deleteSlider(id: number){
    return this.http.delete<any>('http://localhost:3000/srcList/'+id);
  }
}
