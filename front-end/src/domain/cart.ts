import { CartItem } from "domain/cartItem";

/**
 * Interface representing a cart.
 */
export interface Cart {
  // total cost for all items (e.g., the sum of each item's total cost)
  totalCost: number;

  // List products in the cart
  items: CartItem[];
}
