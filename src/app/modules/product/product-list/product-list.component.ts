import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { ProductService } from 'src/app/core/services/product.service';
import { ShopState } from 'src/app/core/store/reducer';
import { ActionTypes } from 'src/app/core/store/actions';
import { selectProducts } from 'src/app/core/store/selector';
import { IProduct } from 'src/app/core/models/product.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  filterForm!: FormGroup;
  categories = ['C', 'Category2'];
  brands = ['Brand1', 'Brand2'];
  public queryParams = new HttpParams();

  page = 1;

  productList$: Observable<any[]> = of([]);
  items: any[] = [];

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private store: Store<ShopState>
  ) {
    this.productList$ = this.store.select(selectProducts);
    // .subscribe((products) => {
    //   this.productList$ = of(products);
    //   console.log(this.productList$);
    // });
    // this.store.select(productSelector).subscribe((data: any) => (this.items = data.products));
    // this.productList$.subscribe((res) => console.log(res));
    console.log(this.productList$);

    this.loadProducts();
  }

  loadProducts() {
    this.store.dispatch({ type: ActionTypes.GetItems });
  }

  ngOnInit(): void {
    // this.filterForm = this.formBuilder.group({
    //   category: this.formBuilder.array(this.createCheckboxes(this.categories)),
    // });
    // this.store.dispatch(new GetItems());

    this.queryParams = this.queryParams.set('page', this.page);

    // this.onFormChanges();
    // this.getProductlist();
  }

  private getProductlist() {
    this.productService
      .getProductList(this.queryParams)
      .subscribe((res: any[]) => {
        this.productList$ = of(res);
      });
  }

  get category(): FormArray {
    return this.filterForm.get('category') as FormArray;
  }

  createCheckboxes(options: string[]): any {
    options.forEach(() => {
      this.category.push(this.formBuilder.control(false));
    });
    // return options.map(() => this.formBuilder.control(false));
  }

  onFormChanges() {
    // Subscribe to form value changes to send the selected filters as query params
    this.filterForm.valueChanges.subscribe((formValue) => {
      // Call a method to send the formValue to the server as query params

      this.sendFiltersToServer(formValue);
    });
  }

  sendFiltersToServer(formValue: any) {
    // Code to send formValue to the server as query params
    // Replace this with your HTTP request to the server
    console.log(formValue);
  }

  pageEvent(pageNumber: any): void {
    this.page = pageNumber;
    this.queryParams = this.queryParams.set('page', this.page);
    this.getProductlist();
  }
}
