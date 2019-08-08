export class Price{
    priceId:number;
    price1:number;
    categoryId:number;
    insuranceId:Number;
    ageId:number;
    discount:number;
    constructor(priceId,price1,categoryId,insuranceId,ageId,discount){
      this.priceId=priceId,
      this.price1=price1,
      this.categoryId=categoryId,
      this.insuranceId=insuranceId,
      this.ageId=ageId,
      this.discount=discount

    }
}
