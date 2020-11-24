import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgForm} from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductcrudComponent } from './productcrud/productcrud.component';
import { productservice } from './services/productservice';
import { categoryservice } from './services/category.service';
import { HeaderComponent } from './components/shared/header/header.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { FiltersComponent } from './components/shopping-cart/filters/filters.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { CartItemComponent } from './components/shopping-cart/cart/cart-item/cart-item.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { DisplayproductComponent } from './displayproduct/displayproduct.component';
import { CompareproductsComponent } from './compareproducts/compareproducts.component';
import { ViewdetailComponent } from './viewdetail/viewdetail.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { WishlistComponent } from './wishlist/wishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    RegistrationComponent,
    ProductcrudComponent,
    HeaderComponent,
    NavComponent,
    ShoppingCartComponent,
    FooterComponent,
    FiltersComponent,
    ProductListComponent,
    CartItemComponent,
    CartComponent,
    ForgotpasswordComponent,
    DisplayproductComponent,
    CompareproductsComponent,
    ViewdetailComponent,
    UserprofileComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [productservice, categoryservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
