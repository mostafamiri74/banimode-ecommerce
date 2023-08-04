import { Component, ViewEncapsulation } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductService } from 'src/app/core/services/product.service';
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
export class HomeAmazingComponent {
  productList$ = new Observable<any>();

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts() {
    this.productService.getAmazingProduct().subscribe((res: any[]) => {
      this.productList$ = of(res);
    });
  }
}
