import { Cart } from "domain/cart";
import { Product } from "domain/product";

/**
 * Interface used by the page components of this app.
 */
export interface iPageProps {
  // All products available in the planet store
  products: Product[];

  // Current cart
  cart: Cart | null;

  // Callback for when an action that changes the cart happens
  handleCartChange: () => void;
}
