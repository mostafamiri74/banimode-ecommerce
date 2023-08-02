import { Action, ActionReducer } from '@ngrx/store';
import { ShopState, shopReducer } from './reducer';
import { ShopEffects } from './effects';

export interface AppStore {
  product: ActionReducer<ShopState, Action>;
}

export const appStore: AppStore = {
  product: shopReducer,
};

export const appEffects = [ShopEffects];
