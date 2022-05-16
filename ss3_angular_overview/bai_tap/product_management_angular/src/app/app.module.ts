import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductListComponent} from './product/product-list/product-list.component';
import {ProductCreateComponent} from './product/product-create/product-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductModalComponent} from './product/product-list/product-modal/product-modal.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatNativeDateModule, MatPaginatorModule, MatRadioModule,
  MatSelectModule, MatSortModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {TodoComponent} from './todo/todo.component';
import {HttpClientModule} from '@angular/common/http';
import {TodoListComponent} from './todo/todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductModalComponent,
    TodoComponent,
    TodoListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSliderModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    FormsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
