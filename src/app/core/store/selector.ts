import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ShopState } from './reducer';

export const selectShopState = createFeatureSelector<ShopState>('product');

export const selectShoppingCart = createSelector(
  selectShopState,
  (state: ShopState) => state.cart
);

export const selectProducts = createSelector(
  selectShopState,
  (state: ShopState) => state.products
);

export const selectProductQuantity = createSelector(
  selectShoppingCart,
  (products: any[], props: { id: any }) => {
    const product = products.find((p) => p.id == props.id);

    return product ? product.quantity : 0;
  }
);

export const selectProductTotalPrice = createSelector(
  selectShoppingCart,
  (products: any[], props: { id: any }) => {
    const product = products.find((p) => p.id == props.id);

    return (
      (product!.specific_price || product.product_price) * product.quantity
    );
  }
);

export const selectCartTotalPrice = createSelector(
  selectShoppingCart,
  selectProducts,
  (cartItems, products) => {
    return cartItems.reduce((total, cartItem) => {
      const product = products.find((p) => p.id === cartItem.id);

      if (product) {
        return (
          total +
          (product!.specific_price || product.product_price) * cartItem.quantity
        );
      }
      return total;
    }, 0);
  }
);

export const selectExistInCart = createSelector(
  selectShoppingCart,
  (products: any[], props: { id: any }) => {
    return !!products.find((p) => p.id == props.id);
  }
);
