import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ProductDialogComponent} from "./product/product-dialog/product-dialog.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final-2';
  constructor(public dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(ProductDialogComponent);
  }
}
