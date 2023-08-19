import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KitchenFrontend';
  public images : Array<any>= ["/assets/images/food1.jpg","/assets/images/food2.jpg","/assets/images/food3.jpg"];
  constructor(private router: Router){}

}
