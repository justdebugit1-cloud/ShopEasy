import { Component } from '@angular/core';
import { Product } from './product.model';
import { CartService } from '../cart.service';


@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css'],
    standalone: false
})
export class ProductComponent {
  constructor(private cartService: CartService) { }

  products: Product[] = [
    {
      id: 1,
      name: 'ProBook Laptop',
      imageUrl: 'assets/laptop.jpg',
      description: 'A fast, lightweight laptop for work, study, and everyday creativity.',
      price: 899.99
    },
    {
      id: 2,
      name: 'Precision Mouse',
      imageUrl: 'assets/mouse.jpg',
      description: 'An ergonomic wireless mouse with quiet clicks and all-day comfort.',
      price: 39.99
    }
  ];

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }

}
