export class Users{
    userId:number;
    userName:string;
    tz:string;
    password:string;
    hmoId:number;
    isAdmin:boolean;
    adress:string;
    mail:string;
    telephone:string;
    requestForm:string;
    firstName:string;
    lastName:string;
    isConfirm:Boolean;
    age:number;
    
    constructor(userId,userName,tz,password,hmoId,isAdmin,adress,mail,telephone,requestForm,firstName,lastName,isConfirm,age?){
        this.userId=userId;
        this.userName=userName;
        this.tz=tz;
        this.password=password;
        this.hmoId=hmoId;
        this.isAdmin=isAdmin;
        this.adress=adress;
        this.mail=mail;
        this.telephone=telephone;
        this.requestForm=requestForm;
        this.firstName=firstName;
        this.lastName=lastName;
        this.isConfirm=isConfirm;
        this.age=age;
    }
}
 