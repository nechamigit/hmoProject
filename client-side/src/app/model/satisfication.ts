export class Satisfication{
    satisficationId:number;
    hmoId:number;
    satisficationOfWebsite:number;
    satisficationOfHmo:number;
    userId:number;
    comment:string;
    date:Date;
    constructor(satisficationId,hmoId,satisficationOfWebsite,satisficationOfHmo,userId,comment,date){
        this.satisficationId=satisficationId;
        this.hmoId=hmoId;
        this.satisficationOfWebsite=satisficationOfWebsite;
        this.satisficationOfHmo=satisficationOfHmo;
        this.userId=userId;
        this.comment=comment;
        this.date=date;
    }
}
