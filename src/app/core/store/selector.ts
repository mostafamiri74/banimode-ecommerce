import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ShopState } from './reducer';
import { IProduct } from '../models/product.interface';

// export const selectState = (state: ShopState) => state;

export const selectShopState = createFeatureSelector<ShopState>('product');

export const selectShoppingCart = createSelector(
  selectShopState,
  (state: ShopState) => state.cart
);

export const selectProducts = createSelector(
  selectShopState,
  (state: ShopState) => state.products
);

// export const selectShoppingCart = createSelector(
//   selectProducts,
//   selectShoppingCartState,
//   (products, shoppingCart) => {
//     return shoppingCart.map(
//       (id) => products.find((product) => product.id === id)!
//     );
//   }
// );
