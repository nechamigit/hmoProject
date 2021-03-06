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
import { MatDialogRef } from '@angular/material';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

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
  fileToUpload: File = null;
  httpClient: any;
  currentUser:string;
  //route:any;
  
  constructor(private userService: UserService,private router:Router,private route:ActivatedRoute,
    public dialogRef: MatDialogRef<ClerkDetails>) { }
   ngOnInit() { 
    this.currentUser = localStorage.getItem("currentUser");
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
  validatePassword(){
    if(this.clerk.password.length==5){
      Swal.fire('סיסמא עד 5 תוים בלבד');

      //return false;
    }
  }
  confirmClerk() { }

  save(clerk)
   {
    if(this.isNew)
    {
      this.userService.save(this.clerk).subscribe(
       (res:string)=>{
         if(res==""||res==null)
         {
          // this.router.navigate(['table']);
          alert("פרטיך נרשמו בהצלחה ")
          //  console.error('לקוח צריך למלא');  
         }
         else
         {
          this.userService.save(this.clerk).subscribe(
            (res:string)=>
            this.router.navigate(['table']))
             Swal.fire('פקיד קיים במערכת אין אפשרות להרשם בשנית')
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
        this.userService.changeStatus(this.clerk).subscribe(
          (res:string)=>{
          console.log("פקיד עודכן");
          this.router.navigate(['table']);}
        );
      }
      //this.router.navigate(['table']);
      this.dialogRef.close(this.clerk);
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
    (res:string)=>{
    console.log("פקיד נמחק");
    this.router.navigate(["table"]);
    }
  );

}  
update(){
  this.userService.Update(this.clerk).subscribe(
    (res:ClerkDetails)=>{
      this.clerk=res;
      this.router.navigate(["table"]);
    }
  )
}
handleFileInput(files: FileList) {
  this.fileToUpload = files.item(0);
  
}
postFile(fileToUpload: File): Observable<boolean> {
  const endpoint = 'your-destination-url';
  const formData: FormData = new FormData();
  formData.append('fileKey', fileToUpload, fileToUpload.name);
  return this.httpClient
    .post(endpoint, formData, { headers: 'https://us-central1-tutorial-e6ea7.cloudfunctions.net/fileUpload' })
    .map(() => { return true; })
    .catch((e) => this.handleError(e));
}
handleError(e){
  console.log('error'+e)
}
// save() {
//   this.userService.save(this.clerk.value)
//   .subscribe((response: any) => {
//   this.dialogRef.close(this.registerForm.value);
//   });
//   }
 
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
