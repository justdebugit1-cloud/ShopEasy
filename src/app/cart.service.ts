import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from './product/product.model';
import { CartActions } from './cart/CartStoreModule/cart.actions';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private store: Store) {}

  addToCart(product: Product): void {
    this.store.dispatch(CartActions.addItem({ product }));
  }

  removeFromCart(productId: number): void {
    this.store.dispatch(CartActions.removeItem({ productId }));
  }

  clearCart(): void {
    this.store.dispatch(CartActions.clearCart());
  }

  checkout(): void {
    this.store.dispatch(CartActions.checkout());
  }
}
