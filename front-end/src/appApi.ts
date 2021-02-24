// Local imports
import { Cart } from "domain/cart";
import { Product } from "domain/product";

const productUri = "https://localhost:5001/api/Product";
const cartUri = "https://localhost:5001/api/cart";

export class AppApi {
  static getProducts(): Promise<Product[]> {
    return fetch(productUri).then((res) => res.json());
  }

  static getCartSummary(): Promise<Cart> {
    return fetch(cartUri).then((res) => res.json());
  }

  static addCartItem(productId: string): Promise<null> {
    return fetch(`${cartUri}?productId=${productId}`, {
      method: "PUT",
    }).then(() => null);
  }

  static deleteCartItem(cartItemId: string): Promise<null> {
    return fetch(`cartUri/${cartItemId}`).then((res) => res.json());
  }
}
