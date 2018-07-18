import { ActionReducerMap } from '@ngrx/store';

import * as fromAuth from './reducers/auth.reducers';
import * as fromItemsList from './reducers/item.reducers';
import * as fromShoppingList from './reducers/shopping-list.reducers';

export interface AppState {
  auth : fromAuth.State
  itemList : fromItemsList.State
  shoppingList : fromShoppingList.State
}

export const reducers: ActionReducerMap<AppState> = {
  auth : fromAuth.authReducer ,
  itemList : fromItemsList.itemsReducer ,
  shoppingList : fromShoppingList.shoppingListReducer
};