import { Component, OnInit } from '@angular/core';
import { Products } from '../models/Products.model';
import { productservice } from '../services/productservice';


@Component({
  selector: 'app-viewdetail',
  templateUrl: './viewdetail.component.html',
  styleUrls: ['./viewdetail.component.css']
})
export class ViewdetailComponent implements OnInit {
  cartTotal = 0;
  cartItems=[];
  products: Products[] = new Array<Products>();
  productList: Products[] = [];
  constructor(private prodservice: productservice) { }

  ngOnInit(): void {
    this.prodservice.getProduct().subscribe((data: any) => {
      this.productList = data;
    });
  }
  AddToCart(productModel) {
    let model = {
      ProductID: productModel.ProductID,
      TotalPrice: productModel.ProductPrice,
      Quantity: 1,
      UserID: sessionStorage.getItem('userId')
    };
    this.prodservice.AddToCart(model).subscribe((response: any) => {
      if (response == "Success") {
        alert('Product Successfully added to cart.');
      }
    });
  }
  // addproductToCart(product: Products) {
  //   let productExists = false;
  //   for (let i in this.cartItems) {
  //     if (this.cartItems[i].productId === product.ProductID) {
  //       this.cartItems[i].qty++;
  //       productExists = true;
  //       break;
  //     }
  //   }
  //   if (!productExists) {
  //     this.cartItems.push({
  //       productId: product.ProductID,
  //       productName: product.ProductName,
  //       qty: 1,
  //       price: product.ProductPrice
  //     });

  //   }

  //   this.cartTotal = 0;
  //   this.cartItems.forEach(item => {
  //     this.cartTotal += (item.qty * item.price);
  //   });
  // }

}
