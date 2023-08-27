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
      (product!.product_specific_price.specific_price ||
        product.product_price) * product.quantity
    );
  }
);

export const selectCartTotalPrice = createSelector(
  selectShoppingCart,
  selectProducts,
  (cartItems, products) => {
    return cartItems.reduce((total, cartItem) => {
      const product = products.find((p) => p.id === cartItem.id);
      console.log(cartItems);
      console.log(products);

      if (product) {
        return (
          total +
          (product.product_specific_price!.specific_price ||
            product.product_price) *
            cartItem.quantity
        );
      }
      return total;
    }, 0);
  }
);
