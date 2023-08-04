import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ActionTypes } from './actions';
import { ProductService } from '../services/product.service';

@Injectable()
export class ShopEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionTypes.GetItems),
      mergeMap(() =>
        this.productService.getProductList().pipe(
          map((products) => {
            return { type: ActionTypes.LoadSuccess, product: products };
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
