import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-todo-dialog',
  templateUrl: './todo-dialog.component.html',
  styleUrls: ['./todo-dialog.component.css']
})
export class TodoDialogComponent implements OnInit {

  taskForm !: FormGroup;
  constructor(private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private todoService: TodoService,
              private dialogRef : MatDialogRef<TodoDialogComponent>) {
  }

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
    })
    if(this.data){
      this.taskForm.controls['id'].setValue(this.data.id);
      this.taskForm.controls['title'].setValue(this.data.title);
    }
  }

  update(data: any) {
    this.todoService.putTask(this.taskForm.value, this.data.id).subscribe(
      (response)=>{
        alert('OK');
        this.taskForm.reset();
        this.dialogRef.close('update');
      },
      (error)=>{ alert('Failed') }
    );
  }
}
