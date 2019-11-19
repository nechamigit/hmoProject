import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClerkDetails } from '../../model/clerkDetails';
import { Users } from '../../model/Users';
import { Hmo } from '../../model/Hmo';
import { MatInputModule } from '@angular/material/input';
import { HmoService } from '../../hmo/hmo.service'
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../user/user.service'
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { strictEqual } from 'assert';
import { stringify } from '@angular/compiler/src/util';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-clerk-details',
  templateUrl: './clerk-details.component.html',
  styleUrls: ['./clerk-details.component.less']
})
export class ClerkDetailsComponent   {

  clerk: ClerkDetails ;
  isNew:boolean;
 hmos: Array<Hmo>;
 isAdmin:true;
  userType: string = "";
  //route:any;
  
  constructor(private userService: UserService,private router:Router,private route:ActivatedRoute) { }
   ngOnInit() {
     
    var id=+this.route.snapshot.paramMap.get('id');
    if(id)
    {
      this.isNew=false;
      this.userService.getClerkById(id).subscribe((res:ClerkDetails)=>{
      this.clerk=res;
      })
    }
    else
    {
      this.isNew=true;
      this.clerk=new ClerkDetails();

    }
      this.userService.getAllHmos().subscribe((res: Array<Hmo>)=> {
      this.hmos = res;
    });
    this.userType = localStorage.getItem("currentUser") ? localStorage.getItem("currentUser") : " ";
  }
  
  confirmClerk() { }

  save(clerk) {
    if(this.isNew)
    {
      this.userService.save(this.clerk).subscribe(
       (res:string)=>{
         if(res==""||res==null)
         {
           console.error('לקוח צריך למלא');  
         }
         else
         {
          this.userService.save(this.clerk).subscribe(
            (res:string)=>
            console.log("פקיד נרשם"))
          //  localStorage.setItem("currentUser",res);
          //  console.log(res);
          //  this.router.navigate(['main']);
         }
        },
        (err:string)=>{
          console.error('שגיאה אירעה:' + err);  
        }
      ) 
      }
      else{
        // console.log("error");//קוד עדכון
        this.userService.Update(this.clerk).subscribe(
          (res:string)=>
          console.log("פקיד עודכן")
        );
      }
  } 
  changeStatus(){
this.userService.changeStatus(this.clerk).subscribe(
(res:ClerkDetails)=>{
  this.clerk=res;
console.log("השתנה סטטוס");
console.log(this.clerk.isConfirm);
});
  }

  deleteClerk()
{
  this.userService.delete(this.clerk).subscribe(
    (res:string)=>
    console.log("פקיד נמחק")
  );

}  
update(){
  this.userService.Update(this.clerk).subscribe(
    (res:ClerkDetails)=>{
      this.clerk=res;
    }
  )
}

 
  // delete(){
  //   this.userService.delete(this.clerk).subscribe(
  //     (res:string)=>{
  //       if(res==""||res==null)
  //       {
  //         console.error('לקוח צריך למלא');  
  //       }
  //       else
  //       {
  //         console.log("hello");
  //       }
  //     },
  //     (err)=>{
  //       console.error('שגיאה אירעה:' + err);  
  //     }
  //   )
  //   }
}
