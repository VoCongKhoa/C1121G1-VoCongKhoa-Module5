import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BaiDangComponent} from "./bai-dang/bai-dang.component";
import {BaiDangCreateComponent} from "./bai-dang/bai-dang-create/bai-dang-create.component";


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./shared/shared.module').then(module => module.SharedModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then(module => module.ProductModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./category/category.module').then(module => module.CategoryModule)
  },
  {
    path: 'baiDang',
    component: BaiDangComponent
  },
  {
    path: 'baiDang/create',
    component: BaiDangCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
