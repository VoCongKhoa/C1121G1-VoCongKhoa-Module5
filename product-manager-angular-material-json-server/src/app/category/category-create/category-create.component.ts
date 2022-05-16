import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  categoryForm !: FormGroup;
  actionBtn: string = 'Save';

  constructor(private fb: FormBuilder,
              private categoryService: CategoryService,
              private router: Router) { }

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
    })
  }
  addProduct() {
    console.log(this.categoryForm.value);
    this.categoryService.postCategory(this.categoryForm.value).subscribe(
      (response)=>{
        alert('OK');
        this.router.navigateByUrl('/category/list');
      },
      (error)=>{ alert('Failed') })
  }

}
