import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../appService/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
p:any;
  Form!: FormGroup;
  constructor(private _authService: AuthService, private fb:FormBuilder, private _route:Router) { }

  ngOnInit(): void {
    this.Form =this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(6)]]
    });
  }

  loggedIn() {
    if (this.Form.valid) {
      console.log(this.Form.value)

      const email = this.Form.value.email;
      const password = this.Form.value.password;

      this._authService.login(email, password).subscribe(response => {
        console.log(response);
        this.p= this._route.navigate(['/table'])
      },
        err => {
          console.log(err);
        });
      }
      

  }

}
