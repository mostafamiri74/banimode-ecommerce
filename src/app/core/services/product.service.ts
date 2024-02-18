import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, find, map, tap } from 'rxjs';
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

  public getProductList(queryParams?: HttpParams): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('/assets/mock-data/product_list.json', {
      params: queryParams,
    });
  }

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

  public getProductDetails(id: number): Observable<IProduct> {
    return this.http
      .get<any>('/assets/mock-data/product_list.json')
      .pipe(
        map((products) =>
          products.find((product: IProduct) => product.id === id)
        )
      );
  }
}
