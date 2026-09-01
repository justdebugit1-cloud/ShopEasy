import { createReducer, on } from "@ngrx/store";
import { CartActions } from "./cart.actions";
import { initialState } from "./cart.state";

export const cartReducer = createReducer(
  initialState,

  on(
    CartActions.addItem,
    (state, { product }) => ({
      ...state,
      items: [...state.items, product]
    })
  ),


  on(
    CartActions.removeItem,
    (state, { productId }) => {
      const itemIndex = state.items.findIndex(item => item.id === productId);

      return itemIndex === -1
        ? state
        : {
            ...state,
            items: [
              ...state.items.slice(0, itemIndex),
              ...state.items.slice(itemIndex + 1)
            ]
          };
    }
  ),

  on(
    CartActions.clearCart,
    state => ({
      ...state,
      items: []
    })
  ),

  on(
    CartActions.checkout,
    state => ({
      ...state,
      loading: true,
      error: null,
      orderId: null
    })
  ),

  on(
    CartActions.checkoutSuccess,
    (state, { orderId }) => ({
      ...state,
      items: [],
      loading: false,
      orderId
    })
  ),

  on(
    CartActions.checkoutFailure,
    (state, { error }) => ({
      ...state,
      loading: false,
      error
    })
  )
);