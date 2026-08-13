import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
cartItems: Product[] = [];
cart$ = this.cartService.cart$;


constructor(private cartService: CartService) {

  this.cartService.cart$.subscribe(cart => {
    this.cartItems = cart;
  });

}
}
