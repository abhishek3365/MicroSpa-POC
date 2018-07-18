import { Action } from '@ngrx/store';
import { Item } from '../../model/item.model'

export const SET_ITEMS = 'SET_ITEMS';

export class SetItems implements Action {
    readonly type = SET_ITEMS;
  
    constructor(public payload: Item[]) {}
}

export type ItemActions =  SetItems ;