import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HmoService {
  baseRoute:string="http://localhost:58904/api/";
  constructor(private http:HttpClient) { }
 
}

  
 
