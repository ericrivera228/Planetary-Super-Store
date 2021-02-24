// React imports
import React, { useState } from "react";

// Material UI imports
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

// Local imports
import { AppApi } from "appApi";
import { Product } from "domain/product";
import ProductCard from "components/ProductCard";

const ADD_PRODUCT_ERROR =
  "Oh no! There was an error adding that item to the cart. It's probably not worth it anyways...";

interface iProductPageProps {
  products: Product[];
}

export default function ProductPage(props: iProductPageProps) {
  // Indicates if there was an error adding a product to the cart
  const [error, setError] = useState("");

  const onAddClick = (productId: string) => {
    AppApi.addCartItem(productId).then(
      () => {
        console.log("success");
      },
      (error) => {
        setError(ADD_PRODUCT_ERROR);
        console.log(error);
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
                handleAddClick={onAddClick}
              />
            </div>
          );
        })}
      </div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        color="red"
        open={error !== ""}
        autoHideDuration={6000}
        onClose={() => setError("")}
      >
        <MuiAlert elevation={6} variant="filled" severity="error">
          {error}
        </MuiAlert>
      </Snackbar>
    </div>
  );
}
