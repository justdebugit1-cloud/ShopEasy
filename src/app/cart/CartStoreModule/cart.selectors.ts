import { createFeature } from "@ngrx/store";
import { cartReducer } from "./cart.reducer";

export const cartFeature = createFeature({
  name: 'cart',
  reducer: cartReducer
});

export const {
  selectItems,
  selectLoading,
  selectError,
  selectOrderId
} = cartFeature;