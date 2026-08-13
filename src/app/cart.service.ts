import { Injectable } from '@angular/core';
import { Product } from './product/product.model';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
private cartSubject = new BehaviorSubject<Product[]>([]);

cart$ = this.cartSubject.asObservable();

addToCart(product: Product): void {
    const currentCart = this.cartSubject.value;

  this.cartSubject.next([
    ...currentCart,
    product
  ]);

  }
}
