import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AdminUser_project';



  updateTitle(title: any) {

    // debugger;

    this.title = title;

  }

  Type = '';

  updateType(name: any) {

    // debugger;

    this.Type = name;
  }
}
