import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private router:Router, private Aroute:ActivatedRoute){

  }

  ngOnInit(): void {
    this.Aroute.paramMap.subscribe(params => {
      console.log(params);
    });
  }

  brand:any ="";
  title = 'AdminUser_project';



  updateTitle(title: any) {

    // debugger;

    this.title = title;

  }
  goToUserModule(page:string) {
     (page === 'users' ? this.router.navigate(['/users']) : this.router.navigate(['/table']));
  }

  Type = '';

  updateType(name: any) {

    // debugger;

    this.Type = name;
  }
}
