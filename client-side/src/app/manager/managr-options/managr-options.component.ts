import { Component, OnInit } from '@angular/core';
import{RouterModule,Routes,Router}from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';

 
 @Component({
  selector: 'app-managr-options',
  templateUrl: './managr-options.component.html',
  styleUrls: ['./managr-options.component.less']
})
export class ManagrOptionsComponent implements OnInit {

//   rout_clerck(){
// this.route.navigate(['/clerk-table'])
//   }
  constructor(private route:Router) { }
  currentManager:string;
  ngOnInit() {
   this.currentManager = localStorage.getItem("userName");
  }
showProfile(){
  (res:any)=>{


  }
 }
}
