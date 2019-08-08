import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../model/Users';
import { Categories } from '../model/categories';
import { Requests } from '../model/request';
 
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
 
constructor(private http:HttpClient) { }

getClerck():Observable<Users[]>{
  return this.http.get<Users[]>(environment.baseRoute+"clerk/read")
}
getRequest():Observable<Requests[]>{
return this.http.get<Requests[]>(environment.baseRoute+"request/read")
}
getName(id:number){
return this.http.get(environment.baseRoute+"?id="+id)
}
RequestById(id:number)
{
  return this.http.get(environment.baseRoute+"request/readById/"+id);
}
}
 
 
