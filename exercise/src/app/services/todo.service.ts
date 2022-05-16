import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TaskTodo} from "../models/task";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }
  postProduct(data: any){
    return this.http.post<any>('http://localhost:3000/taskList/', data);
  }
  getAllTasks(){
    return this.http.get<TaskTodo[]>('http://localhost:3000/taskList');
  }

  putTask(data: any, id: number) {
    return this.http.put<any>('http://localhost:3000/taskList/'+id, data);
  }

  deleteTask(id: number){
    return this.http.delete<any>('http://localhost:3000/taskList/'+id);
  }
}
