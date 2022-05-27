import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './features/table/table.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsersComponent } from './users/users.component';
import { ActivatedRoute } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  
    {path: '',component:LoginPageComponent},
    // {path: 'users',component:UsersComponent},
    {path: 'table',component:TableComponent},

    {path: 'table/:id',component:TableComponent},
    {path:'dashboard',component:DashboardComponent},
    {path: 'users',component:UsersComponent},
    {path: 'signup-page', component:SignupPageComponent},
    {path: 'login-page', component:LoginPageComponent },

    {path: '**', component:PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
