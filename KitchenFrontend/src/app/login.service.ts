import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Admin } from './admin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url="http://localhost:8088/";
  emailid:string;



  constructor(private http:HttpClient) { }

  

  getadminbyid(emailid: string,pass:string){
    console.log('entered getadminbyid');
    return this.http.get<Admin>(`${this.url}adminlogin/${emailid},${pass}`);
  }
  updatepass(admin: Admin): Observable<any>{
    console.log("entreed url");
    
    return this.http.post<any>(`${this.url}updatepass`,admin);
  }

  getuserbyid(emailid: string,pass:string){
    console.log("user login get user");
    return this.http.get<User>(`${this.url}userlogin/${emailid},${pass}`);
  }

}