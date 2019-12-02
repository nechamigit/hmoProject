import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { UserLoginData } from '../model/user-login-data'
import { userInfo } from 'os';
import { Users } from '../model/Users';
// import { Swal } from 'sweetalert'
import Swal from 'sweetalert2'
import { DialogService } from '../dialog.service';
import { GlobalVariables } from '../global/global-variable';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  user: UserLoginData = new UserLoginData();
  constructor(private loginS: LoginService, private router: Router,private dialogService:DialogService,private globalVariable:GlobalVariables) { }

  ngOnInit() {
    //this.login();
  }
  openLoginDialog(){
    this.dialogService.openLoginDialog()
  }

  login()
   {
    this.loginS.logIn(this.user).subscribe(
      (res:any) =>
      {
        localStorage.setItem("userName", this.user.userName);
        if (res == null)
       {
        //  localStorage.setItem("currentUser","user")

         
          console.error('שם משתמש וסיסמא ללקוח ומנהל בלבד');
          // alert('שם משתמש וסיסמא ללקוח ומנהל בלבד')
          Swal.fire('שם משתמש וסיסמא ללקוח ומנהל בלבד');

        }
        else if(res=='clerk')
        {
          localStorage.setItem("currentUser", res);
          this.globalVariable.userChange.next(res);
          console.log(res);
          this.router.navigate(['categories']);
        }
        else{
          localStorage.setItem("currentUser", res);
          this.globalVariable.userChange.next(res);
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
