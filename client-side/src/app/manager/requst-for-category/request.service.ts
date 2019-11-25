import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
// import { HttpClient } from 'selenium-webdriver/http';
// import { requst-for-category } from '../model/clerkDetails';
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http:HttpClient) { }
  changeStatus(request){
    // return this.http.post(environment.baseRoute+"clerk/UpdateConfirm",clerk);
    return this.http.post(environment.baseRoute+"request/Confirm",request)
}
}
