import { Component, OnInit } from '@angular/core';
import { Price } from '../model/price';
import { RouterLink } from '@angular/router';
import { EditPriceService } from './edit-price.service';

@Component({
  selector: 'app-edit-compare',
  templateUrl: './edit-compare.component.html',
  styleUrls: ['./edit-compare.component.less']
})
export class EditCompareComponent implements OnInit {

  constructor(private router:RouterLink,private editService:EditPriceService) { }
  price:Price

  ngOnInit() {
  }
// save(){
//   this.editService.save(this.price).subscribe(
//     (res:string)=>{
// }
}
