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
dataSource;
displayedColumns: string[] = ['Discount','InsurancePrice','PriceText',  'Age', 'InsuranceName','HmoName'];

  constructor(private route:ActivatedRoute,private catServ:CategoryService,private router:Router) {
    //this.route.params.subscribe(data=>this.selectedCat=+data['id']); 
   
  
    // var id=+this.route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    // this.service.getClerck().subscribe((res)=>{
    //   this.users=res;
    //   this.dataSource = new MatTableDataSource<Users>(this.users);
 
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
