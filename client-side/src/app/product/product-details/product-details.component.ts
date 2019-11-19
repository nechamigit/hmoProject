import { Component, OnInit } from '@angular/core';
import { productDetails } from 'src/app/model/product-details';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryDetails } from 'src/app/model/category-details';
import { ProductService } from '../product.service';
import { Hmo } from 'src/app/model/Hmo';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.less']
})
export class ProductDetailsComponent implements OnInit {

  selectedCategory: CategoryDetails;
  constructor(private router: Router, private route: ActivatedRoute, private productService: ProductService) { }
  product: productDetails=new productDetails;
  categoryId: number;
  hmos: Array<Hmo>;
  ngOnInit() {
    this.route.params.subscribe((data) => {
      this.product.categoryId = +data.parentId;
      return this.productService.getAllHmos().subscribe((res: Array<Hmo>) => {
        this.hmos = res;

      })
    })
  }
  addProduct() {
    this.router.navigate(["addProduct", { parentId: this.selectedCategory.Id }])
  }
  save() {
    this.productService.save(this.product).subscribe((res: productDetails) => {
      this.product = res
    })
  }
  deleteProduct() {
    this.productService.deleteProduct(this.product).subscribe((
      res: string
    ) => {
      if (res) {
        console.log("נמחק מוצר");
      }
    })
  }

}
