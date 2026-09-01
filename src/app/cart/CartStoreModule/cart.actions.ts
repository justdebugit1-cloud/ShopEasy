import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Product } from "../../product/product.model";

export const CartActions = createActionGroup({
  source: 'Cart',


  events: {
    'Add Item': props<{ product: Product }>(),
    'Remove Item': props<{ productId: number }>(),
    'Clear Cart': emptyProps(),
    'Checkout': emptyProps(),
    'Checkout Success': props<{ orderId: string }>(),
    'Checkout Failure': props<{ error: string }>()
  }
});