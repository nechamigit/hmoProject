import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { addCategory } from '../model/addCategory';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) { }

  getCategoryById(id: number) {
    return this.http.get(environment.baseRoute + "Category/GetById/" + id);
  }
  getAllCategories() {
    return this.http.get(environment.baseRoute + "Category/GetAll");
  }
  addCategory(Category: addCategory) {
    return this.http.post(environment.baseRoute + "Category/Create", Category);
  }
  getAllSubCategory(id: number) {
    return this.http.get(environment.baseRoute + "Category/GetAllSubCategory/" + id)
  }
  getAllHmos() {
    return this.http.get(environment.baseRoute + "hmo/GetAllhmo");
  }

}
