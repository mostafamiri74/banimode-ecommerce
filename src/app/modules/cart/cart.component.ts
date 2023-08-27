import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ICartProduct } from 'src/app/core/models/cart.interface';
import {
  RemoveFromCart,
  decreaseQuantity,
  increaseQuantity,
} from 'src/app/core/store/actions';
import {
  selectCartTotalPrice,
  selectProductQuantity,
  selectProductTotalPrice,
  selectShoppingCart,
} from 'src/app/core/store/selector';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cart: ICartProduct[] = [];

  totalPrice$ = this.store.pipe(select(selectCartTotalPrice));

  constructor(private store: Store<{ items: []; cart: [] }>) {
    this.store.pipe(select(selectShoppingCart)).subscribe({
      next: (product) => {
        this.cart = product;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  removeFromCart(id: number) {
    this.store.dispatch(RemoveFromCart({ id }));
  }

  increaseProductQuantity(product: ICartProduct) {
    this.store.dispatch(increaseQuantity({ product }));
  }

  decreaseProductQuantity(product: ICartProduct) {
    this.store.dispatch(decreaseQuantity({ product }));
  }

  getProductQuantity(id: number) {
    return this.store.pipe(select(selectProductQuantity, { id }));
  }

  getProductTotalPrice(id: number) {
    return this.store.pipe(select(selectProductTotalPrice, { id }));
  }
}
