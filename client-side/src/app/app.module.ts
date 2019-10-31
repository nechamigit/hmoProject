import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { SearchComponent } from './search/search.component'
import{RouterModule}from '@angular/router'
import { from, pipe } from 'rxjs';
import { NavbarComponent } from './navbar/navbar.component';
import { ClerkDetailsComponent } from './user/clerk-details/clerk-details.component';
import { MainComponent } from './main/main.component';
import {MatInputModule,MatSelectModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { RequestForchangeComponent } from './requestForChange/request-forchange.component';
import { CategoryTreeComponent } from './trees/category-tree/category-tree.component';
import { TreeModule } from 'angular-tree-component';
import { CategoriesListComponent } from './category/categories-list/categories-list.component';
import { CategoryDetailsComponent } from './category/category-details/category-details.component';
import { UsersListComponent } from './user/users-list/users-list.component';
import { ManagrOptionsComponent } from './manager/managr-options/managr-options.component';
import { tableComponent } from './manager/table/table.component';
import {MatTableModule} from '@angular/material/table';
import {ProductCardComponent} from './category/product-card/product-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { RequstForCategoryComponent } from './manager/requst-for-category/requst-for-category.component';
import { ViewProductComponent } from './product/view-product/view-product.component';
import { productDetails } from './model/product-details';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import {MatButtonModule} from '@angular/material/button';
import {RequestTableComponent} from './manager/request-table/request-table.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ViewSubCategoryComponent } from './search/view-sub-category/view-sub-category.component'; 
// import { ProductDetailsComponent } from './product/product-details/product-details.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent,
    NavbarComponent,
    ClerkDetailsComponent,
    ProductDetailsComponent,
    MainComponent,
    RequestForchangeComponent,
    AddCategoryComponent,
    CategoryTreeComponent,
    CategoriesListComponent,
    CategoryDetailsComponent,
    UsersListComponent,
    ManagrOptionsComponent,
    tableComponent,
    ProductCardComponent,
    RequstForCategoryComponent,
    ViewProductComponent,
    RequestTableComponent,
    ProductCardComponent,
    ViewSubCategoryComponent
    // ReactiveFormsModule
    
  ],
  imports: [
    MatAutocompleteModule,
    BrowserModule,
    MatCheckboxModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    MatInputModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatSelectModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
     
    TreeModule.forRoot(),
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { matAutocomplete}