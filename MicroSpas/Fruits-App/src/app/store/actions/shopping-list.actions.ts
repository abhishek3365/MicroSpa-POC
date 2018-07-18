import { Action } from '@ngrx/store';
import { Item } from '../../model/item.model'

export const SET_CART_ITEMS = 'SET_CART_ITEMS';
export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export class SetItems implements Action {
    readonly type = SET_CART_ITEMS;
    constructor(public payload: Item[]) {}
}

export class AddItem implements Action {
    readonly type = ADD_ITEM;  
    constructor(public payload: Item) {}
}

export class DeleteItem implements Action {
    readonly type = DELETE_ITEM;  
    constructor(public payload: Item) {}
}

export type ShoppingListActions =  SetItems | AddItem | DeleteItem;