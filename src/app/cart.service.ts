import { Injectable } from '@angular/core';
import { Product } from './product/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: Product[] = [];
  
addToCart(product: Product): void {
    this.cartItems.push(product);
  }
}
