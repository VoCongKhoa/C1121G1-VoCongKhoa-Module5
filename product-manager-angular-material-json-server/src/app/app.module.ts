import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {DialogComponent} from './dialog/dialog.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MAT_DATE_LOCALE, MatNativeDateModule} from '@angular/material/core'
import {MatRadioModule} from "@angular/material/radio";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {ProductModule} from "./product/product.module";
import {SharedModule} from "./shared/shared.module";
import { BaiDangComponent } from './bai-dang/bai-dang.component';
import { BaiDangCreateComponent } from './bai-dang/bai-dang-create/bai-dang-create.component';
import { BaiDangUpdateComponent } from './bai-dang/bai-dang-update/bai-dang-update.component';
import { BaiDangDeleteComponent } from './bai-dang/bai-dang-delete/bai-dang-delete.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {TestCaseV1Module} from "./test-case-v1/test-case-v1.module";

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    BaiDangComponent,
    BaiDangCreateComponent,
    BaiDangUpdateComponent,
    BaiDangDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    ProductModule,
    SharedModule,
    NgxPaginationModule,
    TestCaseV1Module
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {
}
