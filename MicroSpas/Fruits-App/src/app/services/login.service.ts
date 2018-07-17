import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { resolve } from 'url';
import { Constants } from '../utils/constants';
import * as moment from "moment";
import { Store } from '@ngrx/store';

import * as AuthActions from '../store/actions/auth.actions';
import * as fromApp from '../store/app.store';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
  
  email;
  userType;
  name;
  token;

  constructor(private http: HttpClient , private store: Store<fromApp.AppState>, public router : Router ) { 
     this.email = localStorage.getItem('email');
     this.userType = localStorage.getItem('userType');
     this.name = localStorage.getItem('name');
     this.token = localStorage.getItem('token');
  }
    
  storeUserDetails(userDetails) {
    this.email = userDetails.email;
  }

  validateCredentials (email, password){
    
    return new Promise( ( resolve , reject ) => {

      var requestJson = {"email": email,
                      "password": password};
    
      this.http.post( Constants.BASE_URL + 'login', requestJson)
        .subscribe( (responseJson : any)  => {
      
          var success = responseJson.success;
          
          if( success ) {
            
            this.userType = responseJson.payload.user_type;
            this.email = responseJson.payload.email;
            this.name = responseJson.payload.name;
            this.token = responseJson.payload.token;

            const expiresAt = moment().add( 24 ,'hours');
            
            localStorage.setItem( 'email' , this.email  );
            localStorage.setItem( 'name' , this.name );
            localStorage.setItem( 'token' , this.token );
            localStorage.setItem( 'expires_at' , JSON.stringify(expiresAt.valueOf()) );

            this.signIn( this.token );

            resolve();
          } else {
            reject ( responseJson.error.error_message );
          }
            
        }
      );

    } );  
    
  }

  getUserDetails(): string{
    return this.email;
  }

  logOut() {
    localStorage.removeItem( 'expires_at' );
    localStorage.removeItem( 'userType' );
    localStorage.removeItem( 'email' );
    localStorage.removeItem( 'token' );
    localStorage.removeItem( 'name' );
    this.store.dispatch( new AuthActions.Logout() );
    this.router.navigate( ['/login'] );
  }

  signIn(token : string) {
    this.store.dispatch( new AuthActions.Signin() );
    this.store.dispatch( new AuthActions.SetToken(token) );
  }

}
