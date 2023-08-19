import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Kitchen } from '../kitchen';
import { KitchenService } from '../kitchen.service';

@Component({
  selector: 'app-updatekitchen',
  templateUrl: './updatekitchen.component.html',
  styleUrls: ['./updatekitchen.component.css']
})
export class UpdatekitchenComponent implements OnInit {

  movie?:Kitchen;
  data:any;

  constructor(private movserv:KitchenService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    console.log('update')
    let id = this.route.snapshot.params['id'];
    console.log(id);
    this.movserv.getkitchenById(id).subscribe(data => {
      this.movie = data;
      
      console.log(this.movie)
  })
  }
  movupdateform=new FormGroup({
    name:new FormControl(),
    descr:new FormControl(),
    category:new FormControl(),
    showdate:new FormControl(),
    showtimings:new FormControl(),
    price:new FormControl()
    });
    get movname(){
      return this.movupdateform.get('name');
    }
    get movdescr(){
      return this.movupdateform.get('descr');
    }
    get movcategory(){
      return this.movupdateform.get('category');
    }
    get movdate(){
      return this.movupdateform.get('showdate');
    }
    get movtime(){
      return this.movupdateform.get('showtimings');
    }
    get movprice(){
      return this.movupdateform.get('price');
    }
    submit(){
      this.movserv.getkitchenById(this.movie.id).subscribe(data=>{
        this.movie=data});
      this.movie.name=this.movname.value;
//console.log("name"+this.medicine.name);
this.movie.descr=this.movdescr.value;
//console.log("descr"+this.medicine.descr);
this.movie.category=this.movcategory.value;
this.movie.price=this.movprice.value;
   // console.log("medi:"+this.medicine.category);
  this.movserv.updatekitchen(this.movie.id,this.movie).subscribe(data=>this.gotolist());
  
    }
gotolist(){
 // console.log("medi:"+data);
    this.router.navigate(['adminview']);
  }
  
   

}
