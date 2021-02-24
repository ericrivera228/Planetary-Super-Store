/**
 * Interface that represents a relationship of a product being included in the cart
 */
export interface CartItem {
  // ex., 12
  id: string;

  // ex., 8
  productId: string;

  // ex., 2
  quantity: number;
}
