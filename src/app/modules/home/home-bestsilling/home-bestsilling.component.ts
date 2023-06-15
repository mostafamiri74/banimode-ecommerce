import { Component } from '@angular/core';
import {
  A11y,
  Mousewheel,
  Navigation,
  Pagination,
  SwiperOptions,
  Scrollbar,
  Autoplay,
} from 'swiper';
import SwiperCore from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

@Component({
  selector: 'app-home-bestsilling',
  templateUrl: './home-bestsilling.component.html',
  styleUrls: ['./home-bestsilling.component.scss'],
})
export class HomeBestsillingComponent {}
