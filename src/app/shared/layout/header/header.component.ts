import { Component, ElementRef, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { debounceTime, fromEvent, map, switchMap } from 'rxjs';
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
  cart: any[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private store: Store<{ items: []; cart: [] }>
  ) {
    this.store
      .pipe(select(selectShoppingCart))
      .subscribe((data) => console.log(data));
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
      .subscribe((res) => {
        this.filterProduct = res;
      });
  }
}
