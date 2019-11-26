import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { observable, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ViewSubCategoryService {

  constructor(private http:HttpClient) { }
}
// getClerck():Observable<Users[]>{
//   return this.http.get<Users[]>(environment.baseRoute+"clerk/read")
// }
// getcompareproduct():Observable<ProductPrices[]>{
//   return thiz.http.get<ProductPrices[]>(environment.baseRoute+"")
// }