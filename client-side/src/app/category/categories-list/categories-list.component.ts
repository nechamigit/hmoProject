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
@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.less']
})
export class CategoriesListComponent implements OnInit {
  myControl = new FormControl();
  constructor(private catServ: CategoryService) { }
  @ViewChild('categoryDetails', { static: false }) child: CategoryDetailsComponent;
  searchVal: string = "tree";
  // Field:boolean=true;
  // options;
  // filteredOptions;
  options: any;
  filteredOptions: Observable<string[]>;
  selectedCategory;
  product: productDetails = new productDetails;
  user: Users;
  hmos: Array<Hmo>;
  age: Age;
  clerk: ClerkDetails=new ClerkDetails;
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
  // onSelectedOption(event: MatAutocompleteSelectedEvent) {
  //   var selectedCategory = event.option.value;
  //   // this.router.navigate(['view',selectedCategory.categoryId]);
  // }

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

}
