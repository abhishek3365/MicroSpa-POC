import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/take'; 
import 'rxjs/add/operator/map'; 

import * as moment from "moment";

import * as fromApp from '../store/app.store';
import * as fromAuth from '../store/reducers/auth.reducers';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private store: Store<fromApp.AppState>, public router : Router,  private cookieService: CookieService ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select('auth')
      .take(1)
      .map((authState: fromAuth.State) => {
        
        var expiresAtString = this.cookieService.get('expires_at')

        if( !expiresAtString ){
            this.router.navigate( ['/login'] );
            return false;
        }
             

        var expiresAt  = JSON.parse( expiresAtString );
    
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