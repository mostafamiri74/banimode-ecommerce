import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { CartService } from 'src/app/core/services/cart.service';
import { ProductService } from 'src/app/core/services/product.service';
import { ActionTypes, AddToCart } from 'src/app/core/store/actions';
import { ShopState } from 'src/app/core/store/reducer';
// import { AddToCart, RemoveFromCart } from 'src/app/core/store/actions';
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
  inCart = false;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private store: Store<ShopState>
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
    // this.cartService.addProduct(this.product);
    // this.store.dispatch({ type: ActionTypes.Add });
    this.store.dispatch(AddToCart(this.product));

    this.inCart = true;
  }

  removeFromCart() {
    this.store.dispatch({ type: ActionTypes.Remove });
    this.inCart = false;
  }
}
