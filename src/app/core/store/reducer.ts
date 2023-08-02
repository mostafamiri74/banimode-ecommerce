import { createReducer, on } from '@ngrx/store';
import { AddToCart, GetItems, LoadSuccess, RemoveFromCart } from './actions';
import { IProduct } from '../models/product.interface';

export interface ShopState {
  products: IProduct[];
  cart: any[];
}

export const initialState: ShopState = {
  products: [],
  cart: [],
};

export const shopReducer = createReducer(
  initialState,

  on(AddToCart, (state, { product }) => ({
    ...state,
    cart: [...state.cart, product],
  })),
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
  }))
);
