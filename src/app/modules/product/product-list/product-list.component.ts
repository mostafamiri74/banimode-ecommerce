import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, map, of, tap } from 'rxjs';
import { ProductService } from 'src/app/core/services/product.service';
import { ShopState } from 'src/app/core/store/reducer';
import { ActionTypes } from 'src/app/core/store/actions';
import { selectProducts } from 'src/app/core/store/selector';
import { IProduct } from 'src/app/core/models/product.interface';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public queryParams = new HttpParams();

  currentPage = 1;
  itemsPerPage = 9;

  allProduct$: Observable<any[]> = of([]);
  productListPerPage$: Observable<any[]> = of([]);
  filteredProducts$: Observable<any[]> = of([]);

  selectedCategory!: string;
  selectedPriceRange!: { min: number; max: number };
  selectedBrands: string[] = [];

  constructor(
    private productService: ProductService,
    private store: Store<ShopState>,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.allProduct$ = this.store.select(selectProducts);

    this.loadProducts();
  }

  loadProducts() {
    this.store.dispatch({ type: ActionTypes.GetItems });
  }

  ngOnInit(): void {
    this.queryParams = this.queryParams.set('page', this.currentPage);

    this.getProductlist();
    this.getPaginatedProducts();
  }

  private getProductlist() {
    this.allProduct$ = this.productService.getProductList(this.queryParams);

    this.filteredProducts$ = this.allProduct$;
  }

  sendFiltersToServer(brands: any) {
    this.selectedBrands = brands;

    this.filteredProducts$ = this.allProduct$.pipe(
      map((products) => {
        let filteredProducts = [...products];

        // if (this.selectedCategory) {
        //   filteredProducts = filteredProducts.filter(
        //     (product) => product.category === this.selectedCategory
        //   );
        // }

        // if (this.selectedPriceRange) {
        //   filteredProducts = filteredProducts.filter(
        //     (product) =>
        //       product.price >= this.selectedPriceRange.min &&
        //       product.price <= this.selectedPriceRange.max
        //   );
        // }

        if (this.selectedBrands.length > 0) {
          filteredProducts = filteredProducts.filter((product) =>
            this.selectedBrands.includes(product.brand)
          );
        }

        return filteredProducts;
      })
    );

    this.filteredProducts$.subscribe((filteredProducts) => {
      console.log('this subscription', filteredProducts);
    });

    this.getPaginatedProducts();
  }

  pageEvent(pageNumber: any): void {
    this.currentPage = pageNumber;
    this.queryParams = this.queryParams.set('page', this.currentPage);

    this.onPageChange(this.currentPage);
  }

  onPageChange(pageNumber: number): void {
    // Update query parameters and trigger data fetch
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: pageNumber },
      queryParamsHandling: 'merge',
    });

    this.getPaginatedProducts();
  }

  getPaginatedProducts(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;

    this.productListPerPage$ = this.filteredProducts$.pipe(
      map((products) => products.slice(startIndex, endIndex))
    );
  }
}
