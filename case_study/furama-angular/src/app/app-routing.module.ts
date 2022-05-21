import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListFacilitiesComponent} from "./facility/list-facilities/list-facilities.component";
import {CreateContractsComponent} from "./contract/create-contracts/create-contracts.component";
import {ListContractsComponent} from "./contract/list-contracts/list-contracts.component";
import {ListCustomersComponent} from "./customer/list-customers/list-customers.component";
import {UpdateCustomersComponent} from "./customer/update-customers/update-customers.component";
import {CreateFacilitiesComponent} from "./facility/create-facilities/create-facilities.component";
import {CreateCustomersComponent} from "./customer/create-customers/create-customers.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {UpdateFacilitiesComponent} from "./facility/update-facilities/update-facilities.component";


const routes: Routes = [
  { path: 'facilities', component: ListFacilitiesComponent},
  { path: 'update-facilities/:id', component: UpdateFacilitiesComponent},
  { path: 'create-facilities', component: CreateFacilitiesComponent},
  { path: 'list-customers', component: ListCustomersComponent},
  { path: 'update-customers/:id', component: UpdateCustomersComponent},
  { path: 'create-customers', component: CreateCustomersComponent},
  { path: 'list-contracts', component: ListContractsComponent},
  { path: 'create-contracts', component: CreateContractsComponent},
  { path:'',component: HomePageComponent},
  {
    path: 'error',
    loadChildren: () => import('./error/error.module').then(module => module.ErrorModule)
  }
  // { path:'**',component: PageNotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
