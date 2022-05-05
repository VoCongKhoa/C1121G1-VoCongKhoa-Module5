import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FuramaFacilitiesComponent } from "./furama-facilities/furama-facilities.component";
import {HomePageComponent} from "./home-page/home-page.component";

const routes: Routes = [
  { path: 'facilities', component: FuramaFacilitiesComponent},
  { path:'',component: HomePageComponent},
  // {path}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
