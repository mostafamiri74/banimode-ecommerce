import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, map, of } from 'rxjs';
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

  productList$: Observable<any[]> = of([]);
  items: any[] = [];

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private store: Store<ShopState>,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.productList$ = this.store.select(selectProducts);

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
    this.productList$ = this.productService.getProductList(this.queryParams);
  }

  sendFiltersToServer(formValue: any) {
    // Code to send formValue to the server as query params
    // Replace this with your HTTP request to the server
    console.log(formValue);
  }

  pageEvent(pageNumber: any): void {
    this.currentPage = pageNumber;
    this.queryParams = this.queryParams.set('page', this.currentPage);

    this.onPageChange(this.currentPage);
  }

  getPaginatedProducts(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;

    this.productList$ = this.productList$.pipe(
      map((productList) => productList.slice(startIndex, endIndex))
    );
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
}
