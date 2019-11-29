import { Component, OnInit } from '@angular/core';
import { Price } from '../model/price';
import { PriceService } from './price.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.less']
})
export class PriceComponent implements OnInit {
  displayedColumns: string[] = ['insurance', 'discount', 'age', 'product','priceText'];

  dataSource;
  selection; 

  price:Price[]

  constructor(private service:PriceService,private router:Router, private route:ActivatedRoute) 
  {
    route.params.subscribe(val => {
      this.service.getPrice().subscribe((res)=>{
        this.price=res;
        this.dataSource = new MatTableDataSource<Price>(this.price);
  
      })
     this.selection== new SelectionModel<Price>(true, []);
    });
  }

  ngOnInit() {
    this.service.getPrice().subscribe((res)=>{
      this.price=res;
      this.dataSource = new MatTableDataSource<Price>(this.price);

    })
   this.selection== new SelectionModel<Price>(true, []);
  }
  isAllSelected() {

    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  editPrice(price:Price){
    this.router.navigate(['editPrice',price.PriceId]);
      }
      masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
      }
  }



