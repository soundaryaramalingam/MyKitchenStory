import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../order';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  getorder:Order;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.getorder=JSON.parse(sessionStorage.getItem('orderdetails'));
    console.log(this.getorder);
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
}
