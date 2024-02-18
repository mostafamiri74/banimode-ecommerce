import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/core/models/product.interface';
import {
  AddToCart,
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
export class CartComponent implements OnInit {
  cart: IProduct[] = [];

  totalPrice$ = this.store.pipe(select(selectCartTotalPrice));

  constructor(private store: Store<{ items: []; cart: [] }>) {}

  ngOnInit(): void {
    // this.loadCartFromLocalStorage();

    this.getCartItemList();
  }

  private loadCartFromLocalStorage() {
    this.cart = JSON.parse(localStorage.getItem('cartItems') || '[]');

    this.cart.forEach((product) => {
      this.store.dispatch(AddToCart({ product }));
    });
  }

  getCartItemList(): void {
    this.store.pipe(select(selectShoppingCart)).subscribe({
      next: (product: IProduct[]) => {
        this.cart = product;

        this.updateLocalStorageCart();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  public removeFromCart(id: number): void {
    this.store.dispatch(RemoveFromCart({ id }));
    this.updateLocalStorageCart();
  }

  public increaseProductQuantity(product: IProduct): void {
    this.store.dispatch(increaseQuantity({ product }));
    this.updateLocalStorageCart();
  }

  public decreaseProductQuantity(product: IProduct): void {
    this.store.dispatch(decreaseQuantity({ product }));
    this.updateLocalStorageCart();
  }

  public getProductQuantity(id: any): Observable<number> {
    return this.store.pipe(select(selectProductQuantity, { id }));
  }

  public getProductTotalPrice(id: number): Observable<number> {
    return this.store.pipe(select(selectProductTotalPrice, { id }));
  }

  private updateLocalStorageCart(): void {
    localStorage.setItem('cartItems', JSON.stringify(this.cart));
  }

  public onPurchase(): void {
    this.cart.forEach((product) => {
      this.store.dispatch(RemoveFromCart({ id: product.id }));
    });

    this.cart = [];

    alert('خرید شما با موفقیت انجام شد.');
  }
}
