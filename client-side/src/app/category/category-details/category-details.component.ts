import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/model/categories';
import { CategoryService } from '../category.service';
import { CategoryDetails } from 'src/app/model/category-details';
import { Products } from 'src/app/model/products';
import { ActivatedRoute, Router } from '@angular/router';
import { productDetails } from 'src/app/model/product-details';
import { } from 'src/app/category/category-details/category-details.component';
@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.less']
})
export class CategoryDetailsComponent implements OnInit {

  selectedCategory:CategoryDetails;
  selectedProduct:productDetails;
  product:Products;
  currentUser:string;
ngOnInit(){
  this.currentUser = localStorage.getItem("currentUser");
}
  constructor(private categoryService:CategoryService,private router:Router,private route:ActivatedRoute) { }

  selectedCategoryWasChanged(selectedCategoryId:number){
  this.categoryService.getCategoryById(selectedCategoryId).subscribe((res:CategoryDetails)=>{
  this.selectedCategory=res;
})
  }

  addCategory(){
    this.router.navigate(["addCategory",{parentId:this.selectedCategory.Id}])
  }
   
  addProduct(){
    this.router.navigate(["addProduct",{parentId:this.selectedCategory.Id}])
  }
  

}
