import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
@Input() 
isComplex:boolean;

@Output()
cardChange: EventEmitter<number> = new EventEmitter<number>();
  constructor(private router:Router,private sanitizer:DomSanitizer ) { }

  ngOnInit() {
  }

  viewProduct(){
    if(this.isComplex){
        this.cardChange.emit(this.product.productId)
    }
    else
    this.router.navigate(['product',this.product.productId]);
  }
  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
   }
}
