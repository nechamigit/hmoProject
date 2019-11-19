import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { UserLoginData } from '../model/user-login-data'
import { userInfo } from 'os';
import { Users } from '../model/Users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  user: UserLoginData = new UserLoginData();
  constructor(private loginS: LoginService, private router: Router) { }

  ngOnInit() {
    this.login();
  }

  login()
   {
    this.loginS.logIn(this.user).subscribe(
      (res:any) =>
      {
        if (res == null)
       {
          console.error('שם משתמש וסיסמא ללקוח ומנהל בלבד');
        }
        else if(res=='clerk')
        {
          localStorage.setItem("currentUser", res);
          console.log(res);
          this.router.navigate(['categories']);
        }
        else{
          localStorage.setItem("currentUser", res);
          console.log(res);
          this.router.navigate(['manager']);
        }
      },

      (err) => {
        console.error('שגיאה אירעה:' + err);
      }
    )
  }

}
