import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageSliderRoutingModule } from './image-slider-routing.module';
import { SliderComponent } from './slider/slider.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    SliderComponent,
    SliderComponent
  ],
  exports: [
    SliderComponent
  ],
  imports: [
    CommonModule,
    ImageSliderRoutingModule,
    CarouselModule
  ]
})
export class ImageSliderModule { }
