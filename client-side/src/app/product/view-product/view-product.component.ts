import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Products } from 'src/app/model/products';
import { Price } from 'src/app/model/price';
import { MatTableDataSource } from '@angular/material';
import { DataCompare } from 'src/app/model/dataCompare';
import { Categories } from 'src/app/model/categories';
import { CategoryService } from 'src/app/category/category.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.less']
})
export class ViewProductComponent implements OnInit {

  constructor(private route: ActivatedRoute,private catServ:CategoryService, private productService: ProductService, private router: Router,private sanitizer:DomSanitizer) { }
  product: Products;
  canEdit: boolean = true;
  showTable: boolean = false;
  selectedCat:number;
  price:Price;
   currentUser:string;
categories: Categories[];
dataSource;
displayedColumns: string[] = ['Discount','InsurancePrice','PriceText',  'Age', 'InsuranceName','HmoName'];

  /* @ViewChild('viewSubCategory', { static: false }) viewSubCategory: any; */
  // editUser(user:Users){
  //   this.router.navigate(['edit-clerk',user.userId]);
  //     }
  editDetails(price){
    this.router.navigate(['editPrice',price.PriceId]);
  }
  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
   }
  ngOnInit(){
    this.currentUser = localStorage.getItem("currentUser");
    // this.route.params.subscribe((data) => {
    //   this.price.priceId = +data.product;
    var id = +this.route.snapshot.paramMap.get('id');
    if (id != 0) {

      this.productService.getProductById(id).subscribe((res: Products) => {
        this.product = res;
        this.productService.getComperation(this.product.productId).subscribe(
          (res) => {
            this.dataSource = res;
            this.showTable=true;
          })
      })
    }
    else { 
          var selectedProductId = +(localStorage.getItem("selectedProduct"));
          
      this.productService.getProductById(selectedProductId).subscribe((res: Products) => {
        this.product = res;
        var r = JSON.parse(localStorage.getItem("comlexList"));
        this.dataSource = r;
        this.showTable=true;
      })
  
      }
    

    if (localStorage.getItem("userId"))
      this.canEdit = true;
  }
  save() {
    this.productService.save(this.product).subscribe(
      (res: Products) => {
        this.product = res;
      })
  }
  addCompare(){
    this.router.navigate(['editCompare'])
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
  deleteProduct() {
    this.productService.deleteProduct(this.product).subscribe((res: string) => {
      if (res != null)
        console.log("מוצר נמחק");
    })
  }
   
   /* compare(){
    this.productService.getComperation(this.product.productId).subscribe(
      (res) => {
        this.viewSubCategory.dataSource = res;
        this.showTable=true;
      })
  } */
}



