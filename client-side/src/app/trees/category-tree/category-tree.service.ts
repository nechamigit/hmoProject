import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryTreeService {
  constructor(private http: HttpClient) { }

  public getCategoryTree() {
    return this.http.get(environment.baseRoute + "CategoryTree/get");
  }
  filterNodes(text: string) {
    return this.http.get(environment.baseRoute + "products/GetProductPrice"+text);
  }
}
