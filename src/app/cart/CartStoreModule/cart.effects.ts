import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, exhaustMap, map, of, withLatestFrom } from 'rxjs';
import { CartApiService } from './cart-api.service';
import { CartActions } from './cart.actions';
import { cartFeature } from './cart.selectors';

@Injectable()
export class CartEffects {
	checkout$ = createEffect(() => this.actions$.pipe(
		ofType(CartActions.checkout),
		withLatestFrom(this.store.select(cartFeature.selectItems)),
		exhaustMap(([, items]) => items.length === 0
			? of(CartActions.checkoutFailure({ error: 'Your cart is empty.' }))
			: this.cartApi.checkout(items).pipe(
					map(({ orderId }) => CartActions.checkoutSuccess({ orderId })),
					catchError(() => of(CartActions.checkoutFailure({
						error: 'Checkout could not be completed. Please try again.'
					})))
				))
	));

	constructor(
		private actions$: Actions,
		private store: Store,
		private cartApi: CartApiService
	) {}
}
