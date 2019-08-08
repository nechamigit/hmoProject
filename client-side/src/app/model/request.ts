import { Users } from './Users';

export class Requests{
    user:Users;
    categoryName:string;
    parentCategory:boolean;
    requestStatus:number;
    requestKind:number;
    categoryId:number;
    requestId:number

constructor(user:Users,categoryName,parentCategory,requestStatus,requestKind,categoryId,requestId){
this.categoryId=categoryId;
this.categoryName=categoryName;
this.parentCategory=parentCategory;
this.requestKind=requestKind;
this.requestStatus=requestStatus;
this.user=user;
this.requestId=requestId
}
}


 