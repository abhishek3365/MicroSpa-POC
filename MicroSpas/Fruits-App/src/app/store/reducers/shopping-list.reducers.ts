import * as ShoppingListActions from '../actions/shopping-list.actions';

import { Item } from '../../model/item.model';

export interface State {
    items: Item[];
}

const initialState: State = {
    items: []
};

export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
    switch (action.type) {
        case ShoppingListActions.SET_CART_ITEMS :
            return {
                ...state,
                items : action.payload
            };
        case ShoppingListActions.ADD_ITEM : 
            return {
                ...state,
                items : [ ...state.items , action.payload ]
            };
        case ShoppingListActions.DELETE_ITEM :
            const oldItems = [...state.items];
            const index = oldItems.indexOf( action.payload );
            oldItems.splice(index, 1);
            return {
                ...state,
                items: oldItems,
            };
        default:
            return state;
    }
}