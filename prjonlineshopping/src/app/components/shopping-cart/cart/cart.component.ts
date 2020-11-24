import { Component, OnInit } from '@angular/core';
import { Products } from '../../../models/Products.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [
    // {id:1,productId:1,productName:'Test 1',qty:4,price:100},
    // {id:2,productId:3,productName:'Test 2',qty:5,price:150},
    // {id:3,productId:2,productName:'Test 3',qty:3,price:130},
    // {id:4,productId:4,productName:'Test 4',qty:2,price:180}
  ];
  cartTotal = 0;
  constructor() { }

  ngOnInit(): void {
  }
  
  addproductToCart(product: Products) {
    let productExists = false;
    for (let i in this.cartItems) {
      if (this.cartItems[i].productId === product.ProductID) {
        this.cartItems[i].qty++;
        productExists = true;
        break;
      }
    }
    if (!productExists) {
      this.cartItems.push({
        productId: product.ProductID,
        productName: product.ProductName,
        qty: 1,
        price: product.ProductPrice
      });

    }

    this.cartTotal = 0;
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price);
    });
  }
}
