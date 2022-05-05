import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FuramaHeaderComponent } from './furama-header/furama-header.component';
import { FuramaFooterComponent } from './furama-footer/furama-footer.component';
import { FuramaFacilitiesComponent } from './furama-facilities/furama-facilities.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FuramaHeaderComponent,
    FuramaFooterComponent,
    FuramaFacilitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
