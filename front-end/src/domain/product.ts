/**
 * Interface for defining the products (i.e., planets) being sold in the store.
 */
export interface Product {
  // ex., 12
  id: string;

  // ex., XR-91
  name: string;

  // in US dollars. ex., 28.24
  price: number;

  // optional
  description?: string;

  // optional; path of the image for this product
  imageSrc?: any;
}
