import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IProduct } from 'src/app/core/models/product.interface';
import { CartService } from 'src/app/core/services/cart.service';
import { ProductService } from 'src/app/core/services/product.service';
import {
  RemoveFromCart,
  decreaseQuantity,
  increaseQuantity,
} from 'src/app/core/store/actions';
import {
  selectProductQuantity,
  selectShoppingCart,
} from 'src/app/core/store/selector';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cart: any[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private store: Store<{ items: []; cart: [] }>
  ) {
    this.store
      .pipe(select(selectShoppingCart))
      .subscribe((data) => (this.cart = data));
  }

  removeFromCart(productId: number) {
    this.store.dispatch(RemoveFromCart({ id: productId }));
  }

  increaseProductQuantity(product: IProduct) {
    this.store.dispatch(increaseQuantity({ product }));
  }

  decreaseProductQuantity(product: IProduct) {
    this.store.dispatch(decreaseQuantity({ product }));
  }

  getProductQuantity(productId: any) {
    return this.store.pipe(select(selectProductQuantity, { productId }));
  }
}
