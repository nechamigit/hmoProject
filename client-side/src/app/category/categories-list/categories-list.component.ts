import { Component, OnInit, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { Categories } from 'src/app/model/categories';
import { CategoryDetailsComponent } from '../category-details/category-details.component';
import { CategoryService } from '../category.service';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { startWith, map } from 'rxjs/operators';
import { Products } from 'src/app/model/products';
import { MatInputModule } from '@angular/material/input';
import { Users } from 'src/app/model/Users';
import { Age } from 'src/app/model/age';
import { productDetails } from 'src/app/model/product-details';
import { ClerkDetails } from 'src/app/model/clerkDetails';
import { Hmo } from 'src/app/model/Hmo';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/product/product.service';
import { CategoryDetails } from 'src/app/model/category-details';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.less']
})
export class CategoriesListComponent implements OnInit {
  myControl = new FormControl();
  constructor(private catServ: CategoryService,private route:Router, private productService:ProductService ) { }
  @ViewChild('categoryDetails', { static: false }) child: CategoryDetailsComponent;
  searchVal: string = 'tree';
  // Field:boolean=true;
  // options;
  // filteredOptions;
  ageSelected:number = 0;
  options: any;
  filteredOptions: Observable<string[]>;
  selectedCategory;
  product: productDetails = new productDetails;
  user: Users;
  hmos: Array<Hmo>;
  age: Age;
  clerk: ClerkDetails=new ClerkDetails;
  currentClerk:string;
  currentUserType:string;
  // ngOnInit() {
  //   this.catServ.getAllCategories().subscribe((res: any) => {
  //     this.option = res;
  //     this.filteredOptions = this.myControl.valueChanges
  //       .pipe(
  //         startWith(''),
  //         map(value => this._filter(value))
  //       );
  //   }),
  //     this.catServ.getAllHmos().subscribe((res: Array<Hmo>) => {
  //       this.hmos = res;
  //     })
  // }
  ngOnInit() {
    this.currentClerk = localStorage.getItem("userName");
    this.currentUserType = localStorage.getItem("currentUser");
    this.catServ.getAllCategories().subscribe((res: any) => {
      this.options = res;
      this.filteredOptions = this.myControl.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value))
        );
    }) ,
    this.catServ.getAllHmos().subscribe((res: Array<Hmo>) => {
      this.hmos = res;
    })
  }
  // HideFildes(){
  //   searchVal:"tree";
  //   this.Field=true;
  // }
  // private _filter(value: string): string[] {
  //   const filterValue = value;

  //   return this.option.filter(option => option.categoryName.includes(filterValue));
  // }
  onSelectedOption(event: MatAutocompleteSelectedEvent) {
    this.catServ.getCategoryById(event.option.value.categoryId).subscribe((res:CategoryDetails)=>{
      this.selectedCategory=res;
    })
  }
cardSelected(event){
  this.product.productId = event;
}
  logNode(node) {
    this.child.selectedCategoryWasChanged(node.id);
  }
  // displayFn(category?: any): string | undefined {
  //   return category ? category.categoryName : undefined;
  // }
  private _filter(value: string): string[] {
    const filterValue = value;

    return this.options.filter(option => option.categoryName.includes(filterValue));
  }

  displayFn(category?: any): string | undefined {
    return category ? category.categoryName : undefined;
  }
  // compareS(){
  //   this.catServ.(this.product.productId).subscribe(
  //     (res) => {
  //       this.viewSubCategory.dataSource = res;
  //       this.showTable=true;
  //     })
  // }
  compareS(){
    if(this.product==null){
      Swal.fire('בחר במוצר מתוך קגוריה נבחרת');
      Swal.fire('שם משתמש וסיסמא ללקוח ומנהל בלבד');
    }
    this.productService.getComplexComperation(this.product.productId, this.ageSelected).subscribe(
      (res)=>{
        localStorage.setItem("comlexList",JSON.stringify(res));
        localStorage.setItem("selectedProduct",this.product.productId.toString());

        setTimeout(() => {
          this.route.navigate(['product']);
        }, 1000);
       
      }
    )
  }

}
