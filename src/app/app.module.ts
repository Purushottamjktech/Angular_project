import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './features/footer/footer.component';
import { HeaderComponent } from './features/header/header.component';
import { LeaveManagmentComponent } from './pages/leave-managment/leave-managment.component';
import { TableComponent } from './features/table/table.component';
import { FilterPipe } from './pipes/filter.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TechServiceService } from './appService/tech-service.service';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';

// import { UserServiceService } from './user-service.service';

// add this line

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent, 
    LeaveManagmentComponent, 
    TableComponent, 
    FilterPipe, UsersComponent, DashboardComponent, PageNotFoundComponent, LoginPageComponent, SignupPageComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    RouterModule,
    BrowserModule,
    ReactiveFormsModule,
    
  ],
  providers: [TechServiceService],
  bootstrap: [AppComponent] 
})
export class AppModule { }
