import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { productDetails } from '../model/product-details';
 

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient,) { }
product:productDetails;
categories;
  getProductById(id:number){
    return this.http.get(environment.baseRoute+"products/readById/"+id);
  }
  getComperation(id:number){
    return this.http.get(environment.baseRoute+"Category/GetComperation/"+id);
  }
  getComplexComperation(id:number, age:number){
    return this.http.post(environment.baseRoute+"Products/getProductByKriterionAndAge",{id:id,age:age});
  }
  save(product){
    return this.http.post(environment.baseRoute+"products/Create",product)
     }
     getCategories(){
       this.categories=[];
     }
     getAllHmos(){
      return this.http.get(environment.baseRoute+"hmo/GetAllhmo");
    }
    deleteProduct(product)
  {
    return this.http.post(environment.baseRoute+"products/Delete",product);
  }
  confirm(requestForCAtegory){
    return this.http.post(environment.baseRoute+"request/changeConfirm",requestForCAtegory)
  }
  uploadPhotos(file,id){
    const formData = new FormData();
    formData.append('image', file);
     return this.http.post(environment.baseRoute+"product/upLowadPhotos?id="+id,formData); 
    }
}
