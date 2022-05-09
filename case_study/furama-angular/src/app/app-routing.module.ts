import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListFacilitiesComponent } from "./list-facilities/list-facilities.component";
import { UpdateFacilitiesComponent } from "./update-facilities/update-facilities.component";
import { HomePageComponent } from "./home-page/home-page.component";
import {CreateFacilitiesComponent} from "./create-facilities/create-facilities.component";
import {ListCustomersComponent} from "./list-customers/list-customers.component";
import {UpdateCustomersComponent} from "./update-customers/update-customers.component";
import {CreateCustomersComponent} from "./create-customers/create-customers.component";
import {CreateContractsComponent} from "./create-contracts/create-contracts.component";
import {ListContractsComponent} from "./list-contracts/list-contracts.component";

const routes: Routes = [
  { path: 'facilities', component: ListFacilitiesComponent},
  { path: 'facilities/update-facilities', component: UpdateFacilitiesComponent},
  { path: 'facilities/create-facilities', component: CreateFacilitiesComponent},
  { path: 'list-customers', component: ListCustomersComponent},
  { path: 'list-customers/update-customers', component: UpdateCustomersComponent},
  { path: 'list-customers/create-customers', component: CreateCustomersComponent},
  { path: 'list-contracts', component: ListContractsComponent},
  { path: 'list-contracts/create-contracts', component: CreateContractsComponent},
  { path:'',component: HomePageComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
