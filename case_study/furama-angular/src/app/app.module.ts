import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomePageComponent} from './home-page/home-page.component';
import {FuramaHeaderComponent} from './furama-header/furama-header.component';
import {FuramaFooterComponent} from './furama-footer/furama-footer.component';
import {ListFacilitiesComponent} from './list-facilities/list-facilities.component';
import {UpdateFacilitiesComponent} from './update-facilities/update-facilities.component';
import {CreateFacilitiesComponent} from './create-facilities/create-facilities.component';
import {ListCustomersComponent} from './list-customers/list-customers.component';
import {UpdateCustomersComponent} from './update-customers/update-customers.component';
import {CreateCustomersComponent} from './create-customers/create-customers.component';
import {ListContractsComponent} from './list-contracts/list-contracts.component';
import {CreateContractsComponent} from './create-contracts/create-contracts.component';
import {FormsModule} from "@angular/forms";
import {ContractService} from "./services/contracts";
import {CustomerService} from "./services/customers";
import {FacilityService} from "./services/facilities";
import {CustomerTypeService} from "./services/customerTypes";
import {ReactiveFormsModule} from '@angular/forms';
import {RentTypeService} from "./services/rentTypes";
import {EmployeeService} from "./services/employees";
import {CustomerModalComponent} from './list-customers/customer-modal/customer-modal.component';
import {HttpClientModule} from "@angular/common/http";
import {NgxPaginationModule} from 'ngx-pagination';
import {ContractModalComponent} from './list-contracts/contract-modal/contract-modal.component';
import {FacilityModalComponent} from './list-facilities/facility-modal/facility-modal.component';
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
import { DialogCustomerComponent } from './list-customers/dialog-customer/dialog-customer.component';
import { ModalCustomerComponent } from './list-customers/modal-customer/modal-customer.component';
import { ModalFacilityComponent } from './list-facilities/modal-facility/modal-facility.component';
import { DialogFacilityComponent } from './list-facilities/dialog-facility/dialog-facility.component';
import {MatCardModule} from "@angular/material/card";


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
