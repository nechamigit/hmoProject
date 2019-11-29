import { Component, OnInit, Input } from '@angular/core';
import { Products } from 'src/app/model/products';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { productDetails } from 'src/app/model/product-details';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.less']
})
export class ProductCardComponent implements OnInit {
@Input() 
product:productDetails;

  constructor(private router:Router,private sanitizer:DomSanitizer ) { }

  ngOnInit() {
  }

  viewProduct(){
    this.router.navigate(['product',this.product.productId]);
  }
  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
   }
}
