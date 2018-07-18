import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AuthGuard } from './services/auth-guard.service';
import { ItemsComponent } from './items/items.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' } ,
    { path: 'login', component: LoginComponent } ,
    { path: 'main', component: MainComponent , canActivate: [ AuthGuard ] , children : [
        { path : '' , component : ItemsComponent } ,
        { path : 'item-list' , component : ItemsComponent }  ,
        { path : 'shopping-list' , component : ShoppingListComponent }  
    ] }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  
export class AppRoutingModule { 
  
}