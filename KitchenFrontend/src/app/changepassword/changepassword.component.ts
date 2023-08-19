import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { LoginService } from '../login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  admin:Admin;
 
  constructor(private logserv: LoginService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.admin=new Admin();
  }
  changepass=new FormGroup({
    
    pass:new FormControl()
    });

    getuser(){
      return sessionStorage.getItem('user');
    }
   
    get pass(){
      return this.changepass.get('pass');
    }
  submit(){
    
    console.log("change pass")
    console.log("pass "+this.pass.value);
    console.log('email id'+this.getuser());
    
    this.admin.emailid=this.getuser();
    this.admin.pass=this.pass.value;
    
   //console.log('done '+this.admin);
   this.logserv.updatepass(this.admin).subscribe(data=>this.gotolist());
    }
gotolist(){
 // console.log("medi:"+data);
    this.router.navigate(['adminview']);
  }
  
    
  
}
