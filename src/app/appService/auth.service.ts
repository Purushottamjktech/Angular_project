import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse } from './appInterface/auth-response.interface';
import { utils } from './utils';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  signUp(email:string, password:string){
   return this.http.post<AuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key= ${utils.API_URL}`,{
      email:email,
      password:password,
      returnSecureToken:true
    });
  }

  login(email:string,password:string){
   return this.http.post<AuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${utils.API_URL}`,{
      email:email,
      password:password,
      returnSecureToken:true
    })
  }
}
