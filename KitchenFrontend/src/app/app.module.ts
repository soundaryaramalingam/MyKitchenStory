import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { AdminviewComponent } from './adminview/adminview.component';
import { UpdatekitchenComponent } from './updatekitchen/updatekitchen.component';
import { AddkitchenComponent } from './addkitchen/addkitchen.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { UserviewComponent } from './userview/userview.component';
import { OrderComponent } from './order/order.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    LoginComponent,
    AdminviewComponent,
    UpdatekitchenComponent,
    AddkitchenComponent,
    ChangepasswordComponent,
    UserviewComponent,
    OrderComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
