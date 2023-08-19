import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminviewComponent } from './adminview/adminview.component';
import { UpdatekitchenComponent } from './updatekitchen/updatekitchen.component';
import { AddkitchenComponent } from './addkitchen/addkitchen.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { UserviewComponent } from './userview/userview.component';
import { OrderComponent } from './order/order.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path:'login',component:LoginComponent},
  { path:'adminview',component:AdminviewComponent},
  { path:'updatekitchen/:id',component:UpdatekitchenComponent},
  { path:'addkitchen',component:AddkitchenComponent},
  { path:'changepass',component:ChangepasswordComponent},
  { path:'userview',component:UserviewComponent},
  { path:'order',component:OrderComponent},
  { path:'payment',component:PaymentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
