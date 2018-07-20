import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Constants } from "../utils/constants";
import { Store } from "@ngrx/store";

import * as fromApp from '../store/app.store';
import * as ItemActions from '../store/actions/items.actions';
import { CookieService } from "ngx-cookie-service";

@Injectable()
export class ItemsService {

    constructor( private httpClient : HttpClient , private store: Store<fromApp.AppState>, private cookieService: CookieService ){
        this.setItems();
    }

    setItems(){
        
        return new Promise( ( resolve , reject ) => {
            this.httpClient
            .get<any>( Constants.BASE_URL + Constants.APP_CONSTANTS.ITEMS_API , { params : new HttpParams().set('token',this.cookieService.get('token')) } )
            .subscribe( (data) => {
                this.store.dispatch( new ItemActions.SetItems(data.payload) );
                resolve();
            } );
        })

    }

}