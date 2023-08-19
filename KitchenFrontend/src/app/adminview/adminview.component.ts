import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Kitchen } from '../kitchen';
import { KitchenService } from '../kitchen.service';

@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.css']
})
export class AdminviewComponent implements OnInit {

  kitchen:Kitchen[];

  constructor(private movserv:KitchenService, private router:Router) { }

  ngOnInit(): void {
    this.movserv.getkitchen().subscribe((data: any)=>{
      console.log(data);
      this.kitchen=data;
      console.log("kitchen "+this.kitchen)
    })
    
  }
  addkitchen(){
    this.router.navigate(['addkitchen']);
  }
  changepass(){
    this.router.navigate(['changepass']);
  }
  getuser(){
    return sessionStorage.getItem('user');
  }
  updatekitchen(id: number){
    console.log("entered");
    this.router.navigate(['/updatekitchen',id]);
  }
  
  deletekitchen(id: number){
    this.movserv.deletekitchen(id).subscribe(data => {
      this.kitchen = this.kitchen?.filter(kitch => kitch.id !== id);
    })
    
    setTimeout(()=>{
      window.location.reload();
    }, 100);
    
 }
 
  logout(){
    sessionStorage.clear();
    this.router.navigate(['login']);
  }

}
