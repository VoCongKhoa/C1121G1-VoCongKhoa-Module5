import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FuramaHeaderComponent } from './furama-header/furama-header.component';
import { FuramaFooterComponent } from './furama-footer/furama-footer.component';
import { ListFacilitiesComponent } from './list-facilities/list-facilities.component';
import { UpdateFacilitiesComponent } from './update-facilities/update-facilities.component';
import { CreateFacilitiesComponent } from './create-facilities/create-facilities.component';
import { ListCustomersComponent } from './list-customers/list-customers.component';
import { UpdateCustomersComponent } from './update-customers/update-customers.component';
import { CreateCustomersComponent } from './create-customers/create-customers.component';
import { ListContractsComponent } from './list-contracts/list-contracts.component';
import { CreateContractsComponent } from './create-contracts/create-contracts.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FuramaHeaderComponent,
    FuramaFooterComponent,
    ListFacilitiesComponent,
    UpdateFacilitiesComponent,
    CreateFacilitiesComponent,
    ListCustomersComponent,
    UpdateCustomersComponent,
    CreateCustomersComponent,
    ListContractsComponent,
    CreateContractsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
