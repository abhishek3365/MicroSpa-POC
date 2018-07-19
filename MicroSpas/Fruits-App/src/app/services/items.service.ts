import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Constants } from "../utils/constants";
import { Store } from "@ngrx/store";

import * as fromApp from '../store/app.store';
import * as ItemActions from '../store/actions/items.actions';

@Injectable()
export class ItemsService {

    constructor( private httpClient : HttpClient , private store: Store<fromApp.AppState> ){
        this.setItems();
    }

    setItems(){
        
        return new Promise( ( resolve , reject ) => {
            this.httpClient
            .get<any>( Constants.BASE_URL + `diary` , { params : new HttpParams().set('token',localStorage.getItem('token')) } )
            .subscribe( (data) => {
                this.store.dispatch( new ItemActions.SetItems(data.payload) );
                resolve();
            } );
        })

    }

}