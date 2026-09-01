import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { cartFeature } from '../cart/CartStoreModule/cart.selectors';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    standalone: false
})
export class HeaderComponent {
    readonly cartItems$ = this.store.select(cartFeature.selectItems);

    constructor(private store: Store) {}
}
