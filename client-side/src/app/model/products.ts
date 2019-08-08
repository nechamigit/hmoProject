export class Products{
    productId:number;
    description:string;
    categoryId:number;
    priceId:number;
    name:string;
    
 

    constructor(productId,description,priceId,requestKind,categoryId){
        this.productId=productId,
        this.description=description,
        this.categoryId=categoryId,
        this.priceId=priceId
        
    }
}

 