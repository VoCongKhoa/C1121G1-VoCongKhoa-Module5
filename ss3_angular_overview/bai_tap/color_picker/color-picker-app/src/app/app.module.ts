import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import {FormsModule} from "@angular/forms";
import { SimpleCalculatorComponent } from './simple-calculator/simple-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorPickerComponent,
    SimpleCalculatorComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
