import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Product } from '../../product/product.model';

export interface CheckoutResponse {
  orderId: string;
}

@Injectable({ providedIn: 'root' })
export class CartApiService {
  checkout(items: Product[]): Observable<CheckoutResponse> {
    const orderId = `ORDER-${Date.now()}`;
    return of({ orderId }).pipe(delay(500));
  }
}