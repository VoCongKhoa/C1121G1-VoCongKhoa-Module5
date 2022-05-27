import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestCaseV1RoutingModule } from './test-case-v1-routing.module';
import { NhapKhoComponent } from './nhap-kho/nhap-kho.component';
import { ModalNccComponent } from './modal-ncc/modal-ncc.component';


@NgModule({
  declarations: [NhapKhoComponent, ModalNccComponent],
  imports: [
    CommonModule,
    TestCaseV1RoutingModule
  ]
})
export class TestCaseV1Module { }
