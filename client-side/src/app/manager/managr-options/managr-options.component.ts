import { Component, OnInit } from '@angular/core';
import{RouterModule,Routes,Router}from '@angular/router';

 
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

  ngOnInit() {
  }

}
