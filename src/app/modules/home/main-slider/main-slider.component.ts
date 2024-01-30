import { Component, ViewEncapsulation } from '@angular/core';
import { A11y, Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
import SwiperCore from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainSliderComponent {}
