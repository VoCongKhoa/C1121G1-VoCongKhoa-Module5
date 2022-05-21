import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from "./product/product-list/product-list.component";

const routes: Routes = [
  {
    path: 'product/list',
    component: ProductListComponent
  },
  {
    path: '',
    component: ProductListComponent
  }
  // , {
  //   path: 'create',
  //   component: ProductCreateComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
