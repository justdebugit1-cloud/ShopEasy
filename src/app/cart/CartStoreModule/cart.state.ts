import { Product } from "../../product/product.model";

interface CartState {
  items: Product[];
  loading: boolean;
  error: string | null;
  orderId: string | null;
}


export const initialState: CartState = {
  items: [],
  loading: false,
  error: null,
  orderId: null
};