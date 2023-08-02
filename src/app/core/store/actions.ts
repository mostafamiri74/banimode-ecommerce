import { createAction, props } from '@ngrx/store';
import { IProduct } from '../models/product.interface';

export enum ActionTypes {
  Add = '[Product] Add to cart',
  Remove = '[Product] Remove from cart',
  GetItems = '[Products] Load items from server',
  LoadSuccess = '[Products] Load success',
}

export const AddToCart = createAction(
  ActionTypes.Add,
  props<{ product: any }>()
);

export const RemoveFromCart = createAction(
  ActionTypes.Remove,
  props<{ id: string }>()
);

export const GetItems = createAction(
  ActionTypes.GetItems,
  props<{ product: IProduct[] }>()
);

export const LoadSuccess = createAction(
  ActionTypes.LoadSuccess,
  props<{ product: IProduct[] }>()
);
