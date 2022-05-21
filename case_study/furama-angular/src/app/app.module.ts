import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomePageComponent} from './home-page/home-page.component';
import {FuramaHeaderComponent} from './furama-header/furama-header.component';
import {FuramaFooterComponent} from './furama-footer/furama-footer.component';

import {FormsModule} from "@angular/forms";
import {ContractService} from "./services/contracts";
import {CustomerService} from "./services/customers";
import {FacilityService} from "./services/facilities";
import {CustomerTypeService} from "./services/customerTypes";
import {ReactiveFormsModule} from '@angular/forms';
import {RentTypeService} from "./services/rentTypes";
import {EmployeeService} from "./services/employees";

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from '@angular/material/core'
import {MatRadioModule} from "@angular/material/radio";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";

import {MatCardModule} from "@angular/material/card";
import {ListFacilitiesComponent} from "./facility/list-facilities/list-facilities.component";
import {FacilityModalComponent} from "./facility/list-facilities/facility-modal/facility-modal.component";
import {NgxPaginationModule} from "ngx-pagination";
import {ModalCustomerComponent} from "./customer/list-customers/modal-customer/modal-customer.component";
import {UpdateCustomersComponent} from "./customer/update-customers/update-customers.component";
import {ContractModalComponent} from "./contract/list-contracts/contract-modal/contract-modal.component";
import {DialogFacilityComponent} from "./facility/list-facilities/dialog-facility/dialog-facility.component";
import {CreateCustomersComponent} from "./customer/create-customers/create-customers.component";
import {ModalFacilityComponent} from "./facility/list-facilities/modal-facility/modal-facility.component";
import {DialogCustomerComponent} from "./customer/list-customers/dialog-customer/dialog-customer.component";
import {CreateContractsComponent} from "./contract/create-contracts/create-contracts.component";
import {ListContractsComponent} from "./contract/list-contracts/list-contracts.component";
import {ListCustomersComponent} from "./customer/list-customers/list-customers.component";
import {CustomerModalComponent} from "./customer/list-customers/customer-modal/customer-modal.component";
import {CreateFacilitiesComponent} from "./facility/create-facilities/create-facilities.component";
import {HttpClientModule} from "@angular/common/http";
import {UpdateFacilitiesComponent} from "./facility/update-facilities/update-facilities.component";


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
    CreateContractsComponent,
    CustomerModalComponent,
    ContractModalComponent,
    FacilityModalComponent,
    DialogCustomerComponent,
    ModalCustomerComponent,
    ModalFacilityComponent,
    DialogFacilityComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCardModule,

  ],
  providers: [ContractService, CustomerService, FacilityService, CustomerTypeService, RentTypeService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
