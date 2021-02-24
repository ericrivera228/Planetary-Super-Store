// React imports
import React, { useState } from "react";

// Local imports
import { AppApi } from "appApi";
import { iPageProps } from "domain/iPageProps";
import ErrorSnackBar from "components/ErrorSnackBar";
import ProductCard from "components/ProductCard";

const ADD_PRODUCT_ERROR =
  "Oh no! There was an error adding that item to the cart. It's probably not worth it anyways...";

export default function ProductPage(props: iPageProps) {
  // Indicates if there was an error adding a product to the cart
  const [error, setError] = useState("");

  const onAddClick = (productId: string) => {
    AppApi.addCartItem(productId).then(
      () => {
        props.handleCartChange();
      },
      (error) => {
        setError(ADD_PRODUCT_ERROR);
      }
    );
  };

  return (
    <div className="product-page container-fluid" style={{ marginTop: 30 }}>
      <div className="row">
        {props.products.map((productToDisplay) => {
          return (
            <div
              className="col-4"
              key={productToDisplay.name}
              style={{ marginBottom: 30 }}
            >
              <ProductCard
                product={productToDisplay}
                inCart={
                  props.cart?.items.find(
                    (x) => x.productId === productToDisplay.id
                  ) != null
                }
                handleAddClick={onAddClick}
              />
            </div>
          );
        })}
      </div>
      <ErrorSnackBar error={error} onClose={() => setError("")} />
    </div>
  );
}
