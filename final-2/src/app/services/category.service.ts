import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  postCategory(data: any){
    return this.http.post<any>('http://localhost:3000/categoryList/', data);
  }
  getAllCategories(){
    return this.http.get<any>('http://localhost:3000/categoryList');
  }

  putCategory(data: any, id: number) {
    return this.http.put<any>('http://localhost:3000/categoryList/'+id, data);
  }

  deleteCategory(id: number){
    return this.http.delete<any>('http://localhost:3000/categoryList/'+id);
  }
}
