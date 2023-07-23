import { Component } from '@angular/core';
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
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  productDetails$ = new Observable<any>();

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProductDetails();
  }

  private getProductDetails() {
    this.productService.getProductDetails().subscribe((res: any[]) => {
      this.productDetails$ = of(res);
    });
  }
}
