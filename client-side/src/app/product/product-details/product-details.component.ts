import { Component, OnInit } from '@angular/core';
import { productDetails } from 'src/app/model/product-details';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryDetails } from 'src/app/model/category-details';
import { ProductService } from '../product.service';
import { Hmo } from 'src/app/model/Hmo';
class ImageSnippet {
  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.less']
})
export class ProductDetailsComponent implements OnInit {
  selectedFile: ImageSnippet;
  selectedCategory: CategoryDetails;
  constructor(private router: Router, private route: ActivatedRoute, 
    private productService: ProductService) { }
  product: productDetails=new productDetails;
  categoryId: number;
  hmos: Array<Hmo>;
  fileList:FormData[];
  newFile:any;
  ngOnInit() {
    this.route.params.subscribe((data) => {
      this.product.categoryId = +data.parentId;
      return this.productService.getAllHmos().subscribe((res: Array<Hmo>) => {
        this.hmos = res;

      })
    })
  }
  addImage(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();
    const id= this.product.productId
    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);
      });
    reader.readAsDataURL(file);
    
  }
    //   saveImg(id:number){
    //     let image1: FormData = new FormData();
    //     if (this.fileList.length > 0) {
    //       for (let i = 0; i< this.fileList.length; i++) {
    //         this.newFile = this.fileList[i];
    //         image1.append(i.toString(), this.newFile, this.newFile.name);
    //       }
    //       this.productService.uploadPhotos(image1, id).subscribe(()=> { })
    //     }
    //   }
  
  addProduct() {
    this.router.navigate(["addProduct", { parentId: this.selectedCategory.Id }])
  }
  save() {
    // this.saveImg(this.product.productId);
    this.productService.save(this.product).subscribe((res: productDetails) => {
      this.product.productId = +res;
      this.productService.uploadPhotos(this.selectedFile,this.product.productId).subscribe(()=> { })

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
