import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './features/footer/footer.component';
import { HeaderComponent } from './features/header/header.component';
import { LeaveManagmentComponent } from './pages/leave-managment/leave-managment.component';
import { TableComponent } from './features/table/table.component';

@NgModule({
  declarations: [
    AppComponent,FooterComponent,HeaderComponent, LeaveManagmentComponent, TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
