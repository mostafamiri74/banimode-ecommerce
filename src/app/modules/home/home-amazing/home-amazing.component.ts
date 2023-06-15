import { Component, ViewEncapsulation } from '@angular/core';
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
  selector: 'app-home-amazing',
  templateUrl: './home-amazing.component.html',
  styleUrls: ['./home-amazing.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeAmazingComponent {}
