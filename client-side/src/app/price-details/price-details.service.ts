import { Injectable } from '@angular/core';
 
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PriceDetailsService {

  constructor(private http:HttpClient) { }
  getPriceById( id:number)
  {
    return this.http.get(environment.baseRoute+"price/readById/"+id);
  }
}
