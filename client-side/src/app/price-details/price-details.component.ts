import { Component, OnInit } from '@angular/core';
import { PriceService } from '../price/price.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PriceDetailsService } from './price-details.service';
import { Price } from '../model/price';

@Component({
  selector: 'app-price-details',
  templateUrl: './price-details.component.html',
  styleUrls: ['./price-details.component.less']
})
// export class PriceDetailsComponent implements OnInit {

  export class PriceDetailsComponent{
    priceType:string=" ";
    id:number;
    price:Price;
    res:Price;
    priceDetail:Price;
  constructor(private service:PriceDetailsService,private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getPriceById();
    // localStorage.setItem("currentPriceDetails", res);
    // console.log(res);
    this.priceType = localStorage.getItem("currentPriceDetails") ? localStorage.getItem("currentPriceDetails") : " ";
  
  }
  getPriceById(){
    this.service.getPriceById(this.id).subscribe((res:Price)=>{
      this.price=res;
    });
  }
  deletePrice(){
    this.service.delete(this.price).subscribe(
      (res:string)=>{
        console.log("פקיד נמחק");
        this.router.navigate(["price"]);
      });
  }
  update(){
    this.service.Update(this.price).subscribe(
      (res:PriceDetailsComponent)=>{
        this.price
        this.router.navigate(["price"]);
      }
    )
  }

}

