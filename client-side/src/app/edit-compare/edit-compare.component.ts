import { Component, OnInit } from '@angular/core';
import { Price } from '../model/price';
import { EditPriceService } from './edit-price.service';

@Component({
  selector: 'app-edit-compare',
  templateUrl: './edit-compare.component.html',
  styleUrls: ['./edit-compare.component.less']
})

export class EditCompareComponent {

  constructor(private editService:EditPriceService) { }
  price:Price

// save(){
//   this.editService.save(this.price).subscribe(
//     (res:string)=>{
// }
}
