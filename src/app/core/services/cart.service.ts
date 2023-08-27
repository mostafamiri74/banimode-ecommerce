import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItems$ = new BehaviorSubject<any[]>([]);
  public products: any[] = [];

  constructor() {}

  public addProduct(product: any) {
    this.products.push(product);
    this.cartItems$.next(this.products);
  }
}
