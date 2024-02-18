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

  currentPage: number = 1;
  itemsPerPage: number = 9;
  totalCount: number = 0;

  allProduct$: Observable<IProduct[]> = of([]);
  productListPerPage$: Observable<IProduct[]> = of([]);
  filteredProducts$: Observable<IProduct[]> = of([]);

  selectedPriceRange!: { minPrice: number; maxPrice: number };
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

  private loadProducts(): void {
    this.store.dispatch({ type: ActionTypes.GetItems });
  }

  ngOnInit(): void {
    this.queryParams = this.queryParams.set('page', this.currentPage);

    this.getProductlist();
  }

  private getProductlist(): void {
    this.allProduct$ = this.productService.getProductList(this.queryParams);

    this.filteredProducts$ = this.allProduct$;

    this.applyFilters();
  }

  public filterByBrands(brands: string[]): void {
    this.selectedBrands = brands;
    this.applyFilters();
  }

  public filterByPriceRange(priceRange: {
    minPrice: number;
    maxPrice: number;
  }): void {
    this.selectedPriceRange = priceRange;
    this.applyFilters();
  }

  private applyFilters(): void {
    this.filteredProducts$ = this.allProduct$.pipe(
      map((products) => {
        let filteredProducts = [...products];

        if (this.selectedPriceRange) {
          filteredProducts = filteredProducts.filter(
            (product) =>
              product.product_price >= this.selectedPriceRange.minPrice &&
              product.product_price <= this.selectedPriceRange.maxPrice
          );
        }

        if (this.selectedBrands.length > 0) {
          filteredProducts = filteredProducts.filter((product) =>
            this.selectedBrands.includes(product.brand)
          );
        }

        this.totalCount = filteredProducts.length;

        return filteredProducts;
      })
    );

    this.getPaginatedProducts();
  }

  public pageEvent(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.queryParams = this.queryParams.set('page', this.currentPage);

    this.onPageChange(this.currentPage);
  }

  private onPageChange(pageNumber: number): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: pageNumber },
      queryParamsHandling: 'merge',
    });

    this.getPaginatedProducts();
  }

  private getPaginatedProducts(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;

    this.productListPerPage$ = this.filteredProducts$.pipe(
      map((products) => products.slice(startIndex, endIndex))
    );
  }
}
