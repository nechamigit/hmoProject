import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Price } from '../model/price';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  constructor(private http:HttpClient) { }
  getPrice():Observable<Price[]>{
    return this.http.get<Price[]>(environment.baseRoute+"price/ReadPrice")
  }

}
