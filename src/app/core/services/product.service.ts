import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  IAmazingProduct,
  IBestSillingProduct,
  IProduct,
} from '../models/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  queryParams = new HttpParams();

  constructor(private http: HttpClient) {}

  public getAmazingProduct(): Observable<IAmazingProduct[]> {
    return this.http.get<IAmazingProduct[]>(
      '/assets/mock-data/amazing_products.json'
    );
  }

  public getBestSillingProduct(): Observable<IBestSillingProduct[]> {
    return this.http.get<IBestSillingProduct[]>(
      '/assets/mock-data/best_silling_products.json'
    );
  }

  public getProductList(queryParams?: HttpParams): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('/assets/mock-data/product_list.json', {
      params: queryParams,
    });
  }

  public getProductDetails(): Observable<any> {
    return this.http.get<any>('/assets/mock-data/product_details.json');
  }

  getFilteredProducts(params: {
    [key: string]: string | number;
  }): Observable<IProduct[]> {
    console.log(this.queryParams);

    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        this.queryParams = this.queryParams.set(key, params[key]);
      }
    }

    return this.http.get<IProduct[]>('/assets/mock-data/product_list.json', {
      params: this.queryParams,
    });
  }
}
