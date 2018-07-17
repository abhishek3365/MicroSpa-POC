import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromApp from '../store/app.store';
import * as fromAuth from '../store/reducers/auth.reducers';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  authState: Observable<fromAuth.State>;

  constructor(private store: Store<fromApp.AppState> , private loginService : LoginService) {
  }

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  onLogout() {
    this.loginService.logOut();
  }

}
