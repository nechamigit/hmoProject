import { Injectable } from '@angular/core';
 
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { PriceDetailsComponent } from './price-details.component';
import { Price } from '../model/price';

@Injectable({
  providedIn: 'root'
})
export class PriceDetailsService {

  constructor(private http:HttpClient) { }
  getPriceById( id:number)
  {
    return this.http.get(environment.baseRoute+"price/readById/"+id);
  }
  delete(price:Price){
    return this.http.post(environment.baseRoute+"price/Delete",price)
  }
  Update(price:Price){
    return this.http.post(environment.baseRoute+"price/Update",price)
  }
}

// Update(clerk:ClerkDetails){
//   return this.http.post(environment.baseRoute+"clerk/Update",clerk)
// }
// delete(clerk:ClerkDetails){
//   // return this.http.post(this.baseRoute+"Account?userName="+userName+"&password="+password,null);
//     return this.http.post(environment.baseRoute+"clerk/Delete",clerk);
// }
