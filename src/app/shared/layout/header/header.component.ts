import { Component, ElementRef, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { debounceTime, fromEvent, map, switchMap } from 'rxjs';
import { IProduct } from 'src/app/core/models/product.interface';
import { ProductService } from 'src/app/core/services/product.service';
import {
  selectCartLength,
  selectShoppingCart,
} from 'src/app/core/store/selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  cartLength: number = 0;

  constructor(private store: Store<{ items: []; cart: [] }>) {
    this.store
      .pipe(select(selectCartLength))
      .subscribe((cartLength: number) => (this.cartLength = cartLength));
  }
}
