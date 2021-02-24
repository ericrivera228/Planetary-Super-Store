// React imports
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Material UI imports
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";

// Icon imports
import Delete from "@material-ui/icons/Delete";

// Local imports
import { AppApi } from "appApi";
import { Routes } from "domain/routes";

// Local imports
import { iPageProps } from "domain/iPageProps";

import "./CartPage.css";

const CART_ITEM_DELETE_ERROR =
  "Oh no! There was an error removing that item from the cart. Check the console for details.";

export default function CartPage(props: iPageProps) {
  const [error, setError] = useState("");

  const pluralize = (word: string, count: number) => {
    return count > 1 ? word + "s" : word;
  };

  const handleDeleteClick = (cartItemId: string) => {
    AppApi.deleteCartItem(cartItemId).then(
      () => {
        props.handleCartChange();
      },
      (error) => {
        setError(CART_ITEM_DELETE_ERROR);
        console.log(error);
      }
    );
  };

  return (
    <div className="cart-page">
      {props.cart == null ||
        (props.cart.items.length <= 0 && (
          <div className="empty-cart-section">
            <div>
              <div>
                <img src="assets/planet_family.png"></img>
                <h1>Your cart is empty...</h1>
                Check out our <Link to={Routes.Product}>product page</Link> to
                see all the wonderful planets we have on offer!
              </div>
            </div>
          </div>
        ))}
      {props.cart != null && props.cart!.items.length > 0 && (
        <div className="container cart-summary MuiPaper-elevation1">
          <h3>
            {props.cart!.items.length}{" "}
            {pluralize("item", props.cart!.items.length)} in your cart
          </h3>
          <div className="card-table">
            <div className="row header">
              <div className="col col-2" />
              <div className="col col-3">Name</div>
              <div className="col col-2 quantity">Quantity</div>
              <div className="col col-2 quantity" />
              <div className="col col-2 amount">Amount</div>
            </div>
            <Divider style={{ marginBottom: 10 }} />
            {props.cart!.items.map((cartItem) => {
              const product = props.products.find(
                (x) => x.id === cartItem.productId
              )!;

              return (
                <div className="row cart-row" key={product.name}>
                  <div className="col col-2">
                    <img
                      src={product.imageSrc}
                      style={{
                        width: "100%",
                        borderRadius: "25px",
                        height: 70,
                      }}
                    />
                  </div>
                  <div className="col col-3">
                    <h5>{product?.name}</h5>
                  </div>
                  <div className="col col-2 quantity">1</div>
                  <div className="col col-2 unit-price">
                    ${product?.price} each
                  </div>
                  <div className="col col-2 amount">${product.price}</div>
                  <div className="col col-1">
                    <IconButton
                      onClick={() => handleDeleteClick(product.name)}
                      style={{ color: "#B00020" }}
                    >
                      <Delete />
                    </IconButton>
                  </div>
                </div>
              );
            })}
            <Divider style={{ marginBottom: 10 }} />
            <div className="row total-row">
              <div className="col col-9" style={{ textAlign: "right" }}>
                Total
              </div>
              <div className="col col-2 amount">
                ${props.cart?.totalCost.toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
