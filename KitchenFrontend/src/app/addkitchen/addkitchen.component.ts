import { Component, OnInit } from '@angular/core';
import { Kitchen } from '../kitchen';
import { KitchenService } from '../kitchen.service';
import { ActivatedRoute, Router } from '@angular/router';
import {FormControl,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-addkitchen',
  templateUrl: './addkitchen.component.html',
  styleUrls: ['./addkitchen.component.css']
})
export class AddkitchenComponent implements OnInit {
  kitchen:Kitchen;
    constructor(private movserv:KitchenService,
      private router:Router,
      private route:ActivatedRoute) {
        this.kitchen=new Kitchen();
       }
  
    ngOnInit(): void {
    }
  
    movsaveform=new FormGroup({
      name:new FormControl(),
      descr:new FormControl(),
      category:new FormControl(),
      showdate:new FormControl(),
      showtimings:new FormControl(),
      price:new FormControl()
      });
      
      
      get movname(){
        return this.movsaveform.get('name');
      }
      get movdescr(){
        return this.movsaveform.get('descr');
      }
      get movcategory(){
        return this.movsaveform.get('category');
      }
      get movdate(){
        return this.movsaveform.get('showdate');
      }
      get movtime(){
        return this.movsaveform.get('showtimings');
      }
      get movprice(){
        return this.movsaveform.get('price');
      }
        onSubmit(){
          console.log("submit")
        //  this.medicine=new Medicine();
      this.kitchen.name=this.movname.value;
      //console.log("name"+this.medicine.name);
      this.kitchen.descr=this.movdescr.value;
      //console.log("descr"+this.medicine.descr);
      this.kitchen.category=this.movcategory.value;
   
      this.kitchen.price=this.movprice.value;
          console.log("medi:"+this.kitchen.category);
          this.movserv.save(this.kitchen).subscribe(data=>this.gotolist());
         
          }
      gotolist(){
       // console.log("medi:"+data);
          this.router.navigate(['adminview']);
        }
      }
      
  