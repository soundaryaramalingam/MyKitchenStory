import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { User } from '../user';
import { VERSION } from '@angular/compiler';
import { LoginService } from '../login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg:string;
  usrmsg:string;
  admin:Admin;
  usr:User;
  data:any;
  
  name = 'Angular ' + VERSION.major;
  

  constructor(private logServ:LoginService, 
    private router:Router,private route:ActivatedRoute) {
      console.log("constructor called .. ")
//sessionStorage.clear(); // it will delete all the values from session
this.admin=new Admin();
this.usr=new User();

    }

  ngOnInit(): void {

  }

  loginform=new FormGroup({
    emailid:new FormControl(),
    pass:new FormControl()
    });

    get emailid(){  
      return this.loginform.get('emailid');
    }
    get pass(){
      return this.loginform.get('pass');
    }


  CheckUserDetails()
  {   
    console.log('entered check user details')
   
    this.logServ.getadminbyid(this.emailid.value,this.pass.value).subscribe(data=>{
       
      if(data){
      this.admin.emailid=data.emailid;
      this.admin.pass=data.pass;
      console.log(data);
     // this.success=true; 
      this.msg="success Login"; 
      sessionStorage.setItem('user',this.admin.emailid);
      this.gotoview();
      }
      else{
        console.log(data);
        this.admin.emailid=null;
        this.admin.pass=null;
        this.msg="Enter correct user name and password";
        this.router.navigate(['/login']);
      }
      
     
});

  }
  CheckDetails()
  {
    console.log('entered check details')
 // console.log(this.emailid.value+" "+this.pass.value);
    this.logServ.getuserbyid(this.emailid.value,this.pass.value).subscribe(data=>{
      console.log('check user log details')
       if(data){
         console.log('check user log details  data '+data.emailid+" "+data.pass+" "+data.address+" "+data.age);
       this.usr.emailid=data.emailid;
       console.log(this.usr.emailid)
       this.usr.pass=data.pass;
       this.usr.address=data.address;
       this.usr.age=data.age;
       this.usr.dob=data.dob;
       this.usr.user_name=data.user_name;
     
         console.log('user : '+this.usr.emailid+" "+this.usr.pass)
      
    //   this.success=true; 
       this.usrmsg="success Login"; 
       sessionStorage.setItem('user',this.usr.emailid);
       this.router.navigate(['userview']);
       }
       else{
         console.log(data);
         this.usr.emailid=null;
         this.usr.pass=null;
         this.usrmsg="Enter correct user name and password";
         this.router.navigate(['/login']);
       }
       
      
 });
}
gotoview(){
  this.router.navigate(['/adminview']);
  }
  
}
 