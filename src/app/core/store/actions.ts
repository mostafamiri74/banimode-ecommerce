import { createAction, props } from '@ngrx/store';
import { IProduct } from '../models/product.interface';

export enum ActionTypes {
  Add = '[Product] Add to cart',
  Remove = '[Product] Remove from cart',
  GetItems = '[Products] Load items from server',
  LoadSuccess = '[Products] Load success',
  increaseQuantity = '[Cart] Increase Quantity',
  decreaseQuantity = '[Cart] Decrease Quantity',
}

export const AddToCart = createAction(
  ActionTypes.Add,
  props<{ product: any }>()
);

export const RemoveFromCart = createAction(
  ActionTypes.Remove,
  props<{ id: number }>()
);

export const GetItems = createAction(
  ActionTypes.GetItems,
  props<{ product: any[] }>()
);

export const LoadSuccess = createAction(
  ActionTypes.LoadSuccess,
  props<{ product: any[] }>()
);

export const increaseQuantity = createAction(
  ActionTypes.increaseQuantity,
  props<{ product: any }>()
);

export const decreaseQuantity = createAction(
  ActionTypes.decreaseQuantity,
  props<{ product: any }>()
);
