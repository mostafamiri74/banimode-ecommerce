import { Component, ElementRef, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { debounceTime, fromEvent, map, switchMap } from 'rxjs';
import { ProductService } from 'src/app/core/services/product.service';
import { selectShoppingCart } from 'src/app/core/store/selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  filterProduct!: any[];
  cart: any[] = [];

  constructor(
    private productService: ProductService,
    private store: Store<{ items: []; cart: [] }>
  ) {
    this.store.pipe(select(selectShoppingCart)).subscribe({
      next: (data) => {
        this.cart = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
