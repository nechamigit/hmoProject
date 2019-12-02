import { Component, OnInit } from '@angular/core';
import { GlobalVariables } from '../global/global-variable';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  currentUser:string=null;
  constructor(private globalVariable:GlobalVariables) {
    this.globalVariable.getUserChangeEmitter().subscribe((res) => {
      this.currentUser = res;
    })
   }

  ngOnInit() {
  }

  logOut(){
    localStorage.removeItem("");
    localStorage.removeItem("");
  }
}
