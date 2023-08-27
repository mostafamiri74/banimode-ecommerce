import { Component, ElementRef, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { debounceTime, fromEvent, map, switchMap } from 'rxjs';
import { ICartProduct } from 'src/app/core/models/cart.interface';
import { CartService } from 'src/app/core/services/cart.service';
import { ProductService } from 'src/app/core/services/product.service';
import { selectShoppingCart } from 'src/app/core/store/selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @ViewChild('search', { static: true }) search!: ElementRef;
  filterProduct!: any[];
  cart: ICartProduct[] = [];

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

  ngOnInit(): void {
    fromEvent(this.search.nativeElement, 'input')
      .pipe(
        map((event: any) => event.target.value),
        debounceTime(1000),
        switchMap((searchText: string) =>
          this.productService.getAmazingProduct()
        )
      )
      .subscribe({
        next: (res) => {
          this.filterProduct = res;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
}
