import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { LoginService } from './services/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor( private loginService : LoginService){
    
    var token = localStorage.getItem( 'token' );
    if( token )
      loginService.signIn( token );
  
  }
}
