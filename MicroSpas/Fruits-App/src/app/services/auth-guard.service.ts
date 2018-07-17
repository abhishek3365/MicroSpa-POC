import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/take'; 
import 'rxjs/add/operator/map'; 

import * as moment from "moment";

import * as fromApp from '../store/app.store';
import * as fromAuth from '../store/reducers/auth.reducers';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private store: Store<fromApp.AppState>, public router : Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select('auth')
      .take(1)
      .map((authState: fromAuth.State) => {
        
        var expiresAt  = JSON.parse( localStorage.getItem('expires_at') );
    
        if( expiresAt ){
            
            if( moment().isBefore( moment(expiresAt) ) ){
                return true;
            } else {
                this.router.navigate( ['/login'] );
                return false;
            }

        } else {
            this.router.navigate( ['/login'] );
            return false;
        }
      });
  }
}