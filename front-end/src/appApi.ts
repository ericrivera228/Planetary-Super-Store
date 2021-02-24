// Local imports
import { Cart } from "domain/cart";
import { Product } from "domain/product";

const productUri = "http://localhost:5000/api/Product";
const cartUri = "http://localhost:5000/api/cart";

/**
 * Class for interacting with the back-end api endpoints.
 */
export class AppApi {
  static getProducts(): Promise<Product[]> {
    return fetch(productUri).then((res) => res.json());
  }

  static getCartSummary(): Promise<Cart> {
    return fetch(cartUri).then((res) => res.json());
  }

  static addCartItem(productId: string): Promise<any> {
    return fetch(`${cartUri}?productId=${productId}`, {
      method: "PUT",
    }).then((res) => handleResponse(res));
  }

  static changeItemQuantity(cartItemId: string, quantity: number | string): Promise<any> {
    // -1 is a magic param that indicates a null. Use this if the input is an empty string
    const qualParam = quantity == "" ? -1 : quantity;

    return fetch(`${cartUri}/${cartItemId}/${qualParam}`, {
      method: "PUT",
    }).then((res) => handleResponse(res));
  }

  static deleteCartItem(cartItemId: string): Promise<any> {
    return fetch(`${cartUri}/${cartItemId}`, {
      method: "DELETE",
    }).then((res) => handleResponse(res));
  }
}

/**
 * Utility function for handling a response from a fetch call.
 */
function handleResponse(response: Response) {
  if (!response.ok) {
    console.log(response.statusText);
    throw new Error(response.statusText);
  }
  return response;
}
