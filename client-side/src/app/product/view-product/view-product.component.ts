import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Products } from 'src/app/model/products';
import { Price } from 'src/app/model/price';
import { MatTableDataSource } from '@angular/material';
import { DataCompare } from 'src/app/model/dataCompare';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.less']
})
export class ViewProductComponent implements OnInit {

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) { }
  product: Products;
  canEdit: boolean = true;
  showTable: boolean = false;
  @ViewChild ('viewSubCategory',{static:false}) viewSubCategory: any;
  ngOnInit() {
    var id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProductById(id).subscribe((res:Products) => {
        this.product = res;
      })
    }
    else { }

    if (localStorage.getItem("userId"))
      this.canEdit = true;
  }
  save() {
    this.productService.save(this.product).subscribe(
      (res: Products) => {
        this.product = res;
      })
  }
  compare(){
    this.productService.getComperation(this.product.productId).subscribe(
      (res) => {
        this.viewSubCategory.dataSource = res;
        this.showTable=true;
      })
  }
  deleteProduct() {
    this.productService.deleteProduct(this.product).subscribe((res: string) => {
      if (res != null)
        console.log("מוצר נמחק");
    })
  }
}



