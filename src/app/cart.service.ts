import { Injectable ,signal } from '@angular/core';
import { Product } from './product/product.model';


@Injectable({
  providedIn: 'root'
})
export class CartService {
private cartState = signal<Product[]>([]);

readonly cart =this.cartState.asReadonly();

addToCart(product: Product): void {
  this.cartState.update((cart) => [...cart, product]); 

  }
}
 