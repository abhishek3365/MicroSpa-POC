import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import * as fromApp from '../store/app.store';
import * as fromShoppingList from '../store/reducers/shopping-list.reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  shoppingListState: Observable<fromShoppingList.State>;

  constructor( private store: Store<fromApp.AppState> ) { }

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');
  }
}
