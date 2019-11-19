import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { ClerkDetailsComponent } from './user/clerk-details/clerk-details.component';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { CategoriesListComponent } from './category/categories-list/categories-list.component';
import { TreeComponent } from 'angular-tree-component';
import { ManagrOptionsComponent } from './manager/managr-options/managr-options.component';
import { tableComponent } from './manager/table/table.component';
import { RequstForCategoryComponent } from './manager/requst-for-category/requst-for-category.component';
import { CategoryDetails } from './model/category-details';
import { ViewProductComponent } from './product/view-product/view-product.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { RequestTableComponent } from './manager/request-table/request-table.component'
import { CategoryTreeComponent } from './trees/category-tree/category-tree.component';
import { ProductCardComponent } from './category/product-card/product-card.component';
import { ViewSubCategoryComponent } from './search/view-sub-category/view-sub-category.component';
import { AboutComponent } from './about/about.component';
import { HierarchyComponent } from './hierarchy/hierarchy.component';
// import {SearchCategoryComponent}from './search-category/search-category.component'
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'hierarchy', component: HierarchyComponent },
  { path: 'manager', component: ManagrOptionsComponent },
  { path: 'search', component: SearchComponent },
  { path: 'clerk', component: ClerkDetailsComponent },
  { path: 'edit-clerk/:id', component: ClerkDetailsComponent },
  { path: 'edit-request/:id', component: RequstForCategoryComponent },
  { path: 'product/:id', component: ViewProductComponent },
  { path: 'main', component: MainComponent },
  { path: 'addCategory', component: AddCategoryComponent },
  { path: 'addProduct', component: ProductDetailsComponent },
  { path: 'categories', component: CategoriesListComponent },
  // {path:'tree',component:TreeComponent},
  { path: 'view/:id', component: ViewSubCategoryComponent },
  { path: 'table', component: tableComponent },
  { path: 'back', component: CategoriesListComponent },
  { path: 'cards', component: ProductCardComponent },
  { path: 'categoryTable', component: RequestTableComponent },
  { path: 'categoryDetails', component: CategoryDetails },
  { path: 'tree', component: CategoryTreeComponent },
 { path: '123', component: ViewProductComponent },
  { path: '**', component: MainComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]

})
export class AppRoutingModule { }

function category(): string {
  return 'addcategory';
}
