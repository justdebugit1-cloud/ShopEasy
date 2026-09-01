import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { cartFeature } from './CartStoreModule/cart.selectors';
import { CartActions } from './CartStoreModule/cart.actions';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
    standalone: false
})
export class CartComponent {
  readonly cartItems$ = this.store.select(cartFeature.selectItems);
  readonly loading$ = this.store.select(cartFeature.selectLoading);
  readonly error$ = this.store.select(cartFeature.selectError);
  readonly orderId$ = this.store.select(cartFeature.selectOrderId);

  constructor(private store: Store) {}

  removeItem(productId: number): void {
    this.store.dispatch(CartActions.removeItem({ productId }));
  }

  checkout(): void {
    this.store.dispatch(CartActions.checkout());
  }

  clearCart(): void {
    this.store.dispatch(CartActions.clearCart());
  }
}
