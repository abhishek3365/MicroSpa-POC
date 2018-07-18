import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Constants } from "../utils/constants";
import { Store } from "@ngrx/store";

import * as fromApp from '../store/app.store';
import * as ShoppingListActions from '../store/actions/shopping-list.actions';

@Injectable()
export class ShoppingListSerivce {

    constructor( private httpClient : HttpClient , private store: Store<fromApp.AppState> ){
    }

    setShoppingList(){
        
        var shoppingList = localStorage.getItem( 'shoppingList' );

        return new Promise( ( resolve , reject ) => {
            this.httpClient
            .post<any>( Constants.BASE_URL + `items` , { items : shoppingList } , { params : new HttpParams().set('token',localStorage.getItem('token')) } )
            .subscribe( (data) => {
                console.log(data);
                this.store.dispatch( new ShoppingListActions.SetItems(data.payload) );
                resolve();
            } );
        })

    }

}