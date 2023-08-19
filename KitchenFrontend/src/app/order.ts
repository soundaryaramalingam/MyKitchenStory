export class Order {
    OrderId:string;
    totalitems:number;
    total:number;
    emailid:string;
    items:string;
    dt:string;
    constructor(OrderId:string, totalitems:number,total:number,emailid:string,dt:string, items:string)
    {
        this.OrderId=OrderId;
        this.totalitems=totalitems;
        this.total=total;
        this.emailid=emailid;
        this.dt=dt;
        this.items=items;
    }
   
}
