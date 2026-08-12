import { Component } from '@angular/core';
import { Product } from './product.model';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor(private cartService: CartService) { }

  product: Product = {
    name: 'Stylish Sneakers',
    imageUrl: 'assets/sneaker.png',
    description: 'Comfortable, everyday sneakers with a modern look.',
    price: 49.99
  };

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }

}
