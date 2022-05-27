import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../appService/auth.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  Form!: FormGroup;

    userType:string='student';
    roles=['Admin','Student']

  constructor(private fb:FormBuilder, private _authservice:AuthService,private _route:Router) { }
  
  ngOnInit(): void {
    this.Form =this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(6)]]
    });
  }
  onsubmit(){
    if(this.Form.valid){
    console.log(this.Form.value)


    const email=this.Form.value.email;
    const password=this.Form.value.password;

    this._authservice.signUp(email,password).subscribe(response=>{
      console.log(response);
    },
    err =>{
      console.log(err);
    }
    );

  }else{

  }
  this._route.navigate(['/login-page'])
  }
}
