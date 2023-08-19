import { Component, OnInit } from '@angular/core';
import { Kitchen } from '../kitchen';
import { KitchenService } from '../kitchen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent  implements OnInit {
  kitchen:Kitchen[];
  total:number=0;
  getkitchen:Kitchen;
  ename:string="";
  getselectedproduct:Kitchen[]=[];
  constructor(private movserv:KitchenService, private router:Router) { }

  ngOnInit(): void {
this.method();
    
  }
  
  method(){
    this.movserv.getkitchen().subscribe((data: any)=>{
      this.kitchen=data;

    })
  }
addcart(id:number)
{
  console.log("entered add cart ")
 this.movserv.getkitchenById(id).subscribe(data=>{
  this.getkitchen=data;
 
  this.total=this.total+this.getkitchen.price;
  console.log(this.total);
  this.getselectedproduct.push(this.getkitchen);
 })
}

checkout(){
  sessionStorage.setItem('selectedproducts',JSON.stringify(this.getselectedproduct));
  sessionStorage.setItem('total',this.total.toString());
  this.router.navigate(['order']);
}

getuser(){
  return sessionStorage.getItem('user');
}
logout(){
  sessionStorage.clear();
  this.router.navigate(['login']);
}

search()
{
  if(this.ename=="")
  {
    this.method();
  }
  else{
    this.kitchen=this.kitchen.filter(res=>
      {
        return res.name.toLocaleLowerCase().match(this.ename);
      });
  }
}

}

