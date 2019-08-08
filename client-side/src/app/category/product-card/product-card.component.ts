import { Component, OnInit, Input } from '@angular/core';
import { Products } from 'src/app/model/products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.less']
})
export class ProductCardComponent implements OnInit {
@Input() product:Products;
  constructor(private router:Router) { }

  ngOnInit() {
  }

  viewProduct(){
    this.router.navigate(['product',this.product.productId]);
  }

}
