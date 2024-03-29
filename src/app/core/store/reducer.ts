import { createReducer, on } from '@ngrx/store';
import {
  AddToCart,
  GetItems,
  LoadSuccess,
  RemoveFromCart,
  increaseQuantity,
  decreaseQuantity,
} from './actions';
import { IProduct } from '../models/product.interface';

export interface ShopState {
  products: IProduct[];
  cart: IProduct[];
}

export const initialState: ShopState = {
  products: [],
  cart: [],
};

export const shopReducer = createReducer(
  initialState,

  on(AddToCart, (state, { product }) => {
    let productCopy = { ...product, quantity: 1 };
    return {
      ...state,
      cart: [...state.cart, productCopy],
    };
  }),

  on(RemoveFromCart, (state, { id }) => ({
    ...state,
    cart: state.cart.filter((product) => product.id !== id),
  })),

  on(GetItems, (state) => ({
    ...state,
  })),

  on(LoadSuccess, (state, { product }) => ({
    ...state,
    products: [...product],
  })),

  on(increaseQuantity, (state, { product }) => {
    const updatedProducts = state.cart.map((p) =>
      p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
    );
    return { ...state, cart: updatedProducts };
  }),

  on(decreaseQuantity, (state, { product }) => {
    const updatedProducts = state.cart.map((p) =>
      p.id === product.id ? { ...p, quantity: Math.max(0, p.quantity - 1) } : p
    );
    return { ...state, cart: updatedProducts };
  })
);
