import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SimpleCalculatorComponent } from './simple-calculator/simple-calculator.component';
import { NameCardComponent } from './name-card/name-card.component';
import { AngularProgressBarComponent } from './angular-progress-bar/angular-progress-bar.component';
import { RatingBarComponent } from './rating-bar/rating-bar.component';
import { CountdownAppComponent } from './countdown-app/countdown-app.component';
import { RegisterComponent } from './register/register.component';
import { LoginAccountComponent } from './login-account/login-account.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorPickerComponent,
    SimpleCalculatorComponent,
    NameCardComponent,
    AngularProgressBarComponent,
    RatingBarComponent,
    CountdownAppComponent,
    RegisterComponent,
    LoginAccountComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
