import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' } ,
    { path: 'login', component: LoginComponent } ,
    { path: 'main', component: MainComponent , canActivate: [ AuthGuard ] }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  
export class AppRoutingModule { 
  
}