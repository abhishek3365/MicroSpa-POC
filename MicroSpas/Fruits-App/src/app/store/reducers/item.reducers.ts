import * as ItemActions from '../actions/items.actions';

import { Item } from '../../model/item.model';

export interface State {
    items: Item[];
}

const initialState: State = {
    items: []
};

export function itemsReducer(state = initialState, action: ItemActions.ItemActions ) {
    switch (action.type) {
        case ItemActions.SET_ITEMS :
            return {
                ...state,
                items : action.payload
            };
        default :
            return state;
    }
}