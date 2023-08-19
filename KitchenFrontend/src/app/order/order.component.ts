import { Component, OnInit } from '@angular/core';
import { Kitchen } from '../kitchen';
import { Order } from '../order';
import { KitchenService } from '../kitchen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  checkProduct:Kitchen;
  mov:Kitchen[];
  total:number;
  msg:string="";
  dt:Date=new Date();
  emailid:string;
  order:Order;
  orderid:string="";
  constructor(private movserv:KitchenService, private router:Router) { }

  ngOnInit(): void {
    this.mov=JSON.parse(sessionStorage.getItem('selectedproducts'));
    console.log(this.mov);
    this.total=parseInt(sessionStorage.getItem('total'));
    this.emailid=sessionStorage.getItem('user');
  }

  onsubmit(){
    for(let i=0;i<this.mov.length;i++)
    {
      this.msg+='('+(i+1)+')'+" "+this.mov[i].name+"<br/>";
      console.log(this.msg)
    }
  
   //this.orderid=(Math.random()+1).toString(36).substr;
   this.order=new Order(this.orderid,this.mov.length,this.total,this.emailid,this.dt.toDateString(),this.msg);
   sessionStorage.setItem('orderdetails',JSON.stringify(this.order));
    this.movserv.saveorder(this.order).subscribe(data=>
      {
        this.orderid=data;
        console.log("data "+this.orderid);
        console.log("done ")
        this.gotopayment(this.orderid,this.order);
      });
   //   console.log("data ");
     
  }

  gotopayment(orderid:string,order:Order){
    this.order=new Order(this.orderid,this.order.totalitems,this.order.total,this.order.emailid,this.dt.toDateString(),this.msg);
   
   // console.log("data 2");
        sessionStorage.setItem('orderdetails',JSON.stringify(this.order));
        this.router.navigate(['payment']);
  }

}
