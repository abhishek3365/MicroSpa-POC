import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { LoginService } from './services/login.service';

import * as fromApp from './store/app.store';
import { ShoppingListSerivce } from './services/shopping-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor( private loginService : LoginService , private store: Store<fromApp.AppState> , private shoppingListService : ShoppingListSerivce ){
    
    var token = localStorage.getItem( 'token' );
    if( token )
      loginService.signIn( token );

    var shoppingList = localStorage.getItem( 'shoppingList' );
    if( shoppingList )
      shoppingListService.setShoppingList();
  
  }

  ngOnInit() {
    this.store.select('shoppingList').subscribe( ( result )=> {
      var ids = [];
      for( var i = 0; i < result.items.length ; i++ ){
        ids.push( result.items[i].itemId )
      }
      localStorage.setItem( 'shoppingList' , JSON.stringify(ids) );
    } );
  }

}
