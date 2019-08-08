import { Component, OnInit } from '@angular/core';
import{FormsModule}from '@angular/forms'
//  import{addCategory} from '/model/AddCategory';
 
// import { Categories } from '../model/categories';
 
import {MatInputModule} from '@angular/material/input';
import {FormControl, Validators} from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/model/error';
import { addCategory } from 'src/app/model/addCategory';
import { UserService } from 'src/app/user/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.less']
})
export class AddCategoryComponent implements OnInit  {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
Category:addCategory=new addCategory();
categoriesList:Array<addCategory>;
  matcher = new MyErrorStateMatcher();
  categoryType: string;
  isAdmin:boolean;
  constructor(private route:ActivatedRoute,private categoryService:CategoryService,private router:Router) {
    this.isAdmin=true;
  }

  addCategory() {

    //console.log(this.clerk);
    this.categoryService.addCategory(this.Category).subscribe(
     (res:string)=>{
       if(res==""||res==null)
       {
         console.log('לקוח צריך למלא');  
       }
       else
       {
         console.log("hello");
        //  localStorage.setItem("currentUser",res);
        //  console.log(res);
        //  this.router.navigate(['main']);
       }
     },
     (err)=>{
       console.log('שגיאה אירעה:' + err);  
     }
    )
  }
  ngOnInit() {
    this.Category.parentCategory=+this.route.snapshot.paramMap.get('parentId');
    this.categoryService.getAllCategories().subscribe((res:Array<addCategory>)=>{
      this.categoriesList=res;
    })
   this.categoryType=localStorage.getItem("currentCategory")?localStorage.getItem("currentCategory"):"";
  }
  }
