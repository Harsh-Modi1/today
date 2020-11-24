import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProductcrudComponent } from './productcrud/productcrud.component';
import { ForgotpasswordComponent } from 'src/app/forgotpassword/forgotpassword.component';
import { DisplayproductComponent } from './displayproduct/displayproduct.component';
import { ShoppingCartComponent } from '../app/components/shopping-cart/shopping-cart.component';
import { ViewdetailComponent } from './viewdetail/viewdetail.component';
import { CompareproductsComponent } from './compareproducts/compareproducts.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ShoppingCartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'productcrud', component: ProductcrudComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'cart', component: DisplayproductComponent },
  { path: 'viewdetail', component: ViewdetailComponent },
  { path: 'compare', component: CompareproductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
