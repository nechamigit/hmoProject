import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';
import { Requests } from 'src/app/model/request';
import { Users } from 'src/app/model/Users';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Request } from 'selenium-webdriver/http';
import {MatInputModule} from '@angular/material/input';
import { RequestService } from './request.service';

@Component({
  selector: 'app-requst-for-category',
  templateUrl: './requst-for-category.component.html',
  styleUrls: ['./requst-for-category.component.less']
})
export class RequstForCategoryComponent implements OnInit {

  request: Requests;
  user: Users;
   
  constructor(private requestService:RequestService ,private service:ManagerService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    var id=+this.route.snapshot.paramMap.get('id');
    if(id)
    { 
      this.service.RequestById(id).subscribe((res:Requests) => {
        this.request = res;
        });
      }
    }
    confirm(){
      this.requestService.changeStatus(this.request).subscribe(
        (res:string)=>{
        // console.log( ");
        this.router.navigate(['categoryTable']);}
      );
    }

}
