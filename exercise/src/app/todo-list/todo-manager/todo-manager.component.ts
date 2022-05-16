import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {TodoDialogComponent} from "../todo-dialog/todo-dialog.component";
import {TaskTodo} from "../../models/task";
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-todo-manager',
  templateUrl: './todo-manager.component.html',
  styleUrls: ['./todo-manager.component.css']
})
export class TodoManagerComponent implements OnInit {

  title: string = 'Todo List';
  listTask: TaskTodo[] = [];
  constructor(private todoService: TodoService,
              public dialog: MatDialog) {
    this.getAllTasks();
  }

  ngOnInit(): void {
  }

  addNew(task: string) {
    this.todoService.postProduct({id: this.listTask.length+1, title: task}).subscribe(
      (response)=>{
        this.getAllTasks();},
      (error)=>{ alert('FAILED')}
    );

  }

  removeTask(id: number) {
    this.listTask = this.listTask.filter(task => task.id != id);

  }
  getAllTasks(){
    this.todoService.getAllTasks().subscribe((response)=>{
      this.listTask = response;
    });
  }

  updateTask(task: any) {
    this.dialog.open(TodoDialogComponent, {
      width: "60%",
      data: task
    }).afterClosed().subscribe(value => {
      if (value === 'update'){
        this.getAllTasks();
      }
    });
  }
}
