import { Injectable } from '@angular/core';
import { ClerkDetails } from '../model/clerkDetails';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
 
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) { }
   save(clerk:ClerkDetails){
    // return this.http.post(this.baseRoute+"Account?userName="+userName+"&password="+password,null);
      return this.http.post(environment.baseRoute+"clerk/addClerk",clerk);
  }
  getClerkById( id:number)
  {
    return this.http.get(environment.baseRoute+"clerk/readById/"+id);
  }
  Update(clerk:ClerkDetails){
    return this.http.post(environment.baseRoute+"clerk/Update",clerk)
  }
  delete(clerk:ClerkDetails){
    // return this.http.post(this.baseRoute+"Account?userName="+userName+"&password="+password,null);
      return this.http.post(environment.baseRoute+"clerk/Delete",clerk);
  }
  getAllHmos(){
      return this.http.get(environment.baseRoute+"hmo/GetAllhmo");
    }
    changeStatus(clerk){
      return this.http.post(environment.baseRoute+"clerk/UpdateConfirm",clerk);
    }
    
     
}
 