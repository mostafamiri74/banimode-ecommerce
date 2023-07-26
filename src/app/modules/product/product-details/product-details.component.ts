import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CartService } from 'src/app/core/services/cart.service';
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
  product$ = new Observable<any>();
  public product!: any;

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getProductDetails();
  }

  private getProductDetails() {
    this.productService.getProductDetails().subscribe((res) => {
      this.product$ = of(res);
      this.product = res;
    });
  }

  public addToCart() {
    this.cartService.addProduct(this.product);
  }
}
