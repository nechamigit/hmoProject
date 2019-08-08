import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { UserLoginData } from '../model/user-login-data';
@Injectable({
  providedIn: 'root'
})
//בצורה זו שומרי ם מיגע ב service
export class LoginService {
baseRoute:string="http://localhost:58904/api/";
  constructor(private http:HttpClient) { }

  logIn(user:UserLoginData){
    // return this.http.post(this.baseRoute+"Account?userName="+userName+"&password="+password,null);
    return this.http.post(this.baseRoute+"Account/login",user);
  }
}
