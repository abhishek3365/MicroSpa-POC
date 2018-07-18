import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { Store } from '@ngrx/store';

import * as fromApp from '../../store/app.store';
import * as fromItemList from '../../store/reducers/item.reducers';
import * as ShoppingListActions from '../../store/actions/shopping-list.actions';
import { Observable } from 'rxjs';
import { Item } from '../../model/item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  itemListState: Observable<fromItemList.State>;

  constructor( private itemService : ItemsService , private store: Store<fromApp.AppState> ) { }

  ngOnInit() {
    this.itemListState = this.store.select('itemList');
  }

  onAddItem( item : Item ){
    this.store.dispatch( new ShoppingListActions.AddItem(item)  );
  }

}
