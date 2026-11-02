import { CartActions } from "./cart.actions";
import { cartReducer } from "./cart.reducer";

describe("cartReducer", () => {
  const product = {
    id: 1,
    name: "ProBook Laptop",
    imageUrl: "assets/laptop.jpg",
    description: "A laptop",
    price: 899.99
  };

  it("adds one cart item for each add-item action", () => {
    const state = cartReducer(undefined, CartActions.addItem({ product }));

    expect(state.items).toEqual([product]);
  });

  it("clears the cart and resets the checkout status", () => {
    const start = cartReducer(undefined, CartActions.addItem({ product }));
    const state = cartReducer(start, CartActions.clearCart());

    expect(state.items).toEqual([]);
    expect(state.error).toBeNull();
    expect(state.orderId).toBeNull();
  });

  it("sets checkout state and resolves on success", () => {
    const started = cartReducer(undefined, CartActions.checkout());
    const succeeded = cartReducer(started, CartActions.checkoutSuccess({ orderId: "ORDER-123" }));

    expect(started.loading).toBeTrue();
    expect(succeeded.loading).toBeFalse();
    expect(succeeded.items).toEqual([]);
    expect(succeeded.orderId).toBe("ORDER-123");
  });
});
