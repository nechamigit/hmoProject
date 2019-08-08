import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/category/category.service';
import { Categories } from 'src/app/model/categories';

@Component({
  selector: 'app-view-sub-category',
  templateUrl: './view-sub-category.component.html',
  styleUrls: ['./view-sub-category.component.less']
})
export class ViewSubCategoryComponent implements OnInit {
selectedCat:number;
categories: Categories[];
  constructor(private route:ActivatedRoute,private catServ:CategoryService,private router:Router) {
    this.route.params.subscribe(data=>this.selectedCat=+data['id']); 
   
    this.getSubCategory(); 
    // var id=+this.route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
 
  }
  getSubCategory(){
  this.catServ.getAllSubCategory(this.selectedCat).subscribe((res: Categories[]) => {
    if (res != null) {
      this.categories = res;    
    }
    else {
      console.error('שגיאה אירעה');
    }
  });}
}
