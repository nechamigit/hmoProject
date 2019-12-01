export class Price{
    PriceId:number;
    priceText:number;
    price1:number;
    categoryId:number;
    insuranceId:Number;
    ageId:number;
    discount:number;
    productName:string; 
	  hmoName :string; 
	  insuranceName :string; 
	  ageRange :string; 
    constructor(priceId,price1,categoryId,insuranceId,ageId,discount,priceText){
      this.PriceId=priceId,
      this.price1=price1,
      this.categoryId=categoryId,
      this.insuranceId=insuranceId,
      this.ageId=ageId,
      this.discount=discount,
      this.priceText=priceText
    }
}
