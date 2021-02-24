// React imports
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Material UI imports
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";

// Icon imports
import Delete from "@material-ui/icons/Delete";

// Local imports
import { AppApi } from "appApi";
import { Routes } from "domain/routes";

// Local imports
import ErrorSnackBar from "components/ErrorSnackBar";
import { iPageProps } from "domain/iPageProps";

import "./CartPage.css";

// Error messages for when an API call goes awry
const CART_ITEM_DELETE_ERROR =
  "Oh no! There was an error removing that item from the cart. Check the console for details.";
const CART_UPDATE_ERROR =
  "Oh no! There was an error updating the quantity of that item. Check the console for details.";

export default function CartPage(props: iPageProps) {
  const [error, setError] = useState("");

  /**
   * Utility function for adding an 's' to the given string if applicable.
   *
   * @param word String that is to be pluralized
   * @param count Number to check; if this value is greater than 1, an 's' will be added to the given string.
   */
  const pluralize = (word: string, count: number) => {
    return count > 1 ? word + "s" : word;
  };

  /**
   * Function for handling when the user clicks a delete button. Calls the API to remove  this item from the cart.
   * If an error occurs while communicating with the API, an error message is shown.
   *
   * @param cartItemId Id of the cart item to be removed.
   */
  const handleDeleteClick = (cartItemId: string) => {
    AppApi.deleteCartItem(cartItemId).then(
      () => {
        props.handleCartChange();
      },
      (error) => {
        setError(CART_ITEM_DELETE_ERROR);
      }
    );
  };

  /**
   * Function for handling when the user changes the quantity of a cart item. Calls the API to update the quantity.
   * If an error occurs while communicating with the API, an error message is shown.
   *
   * @param cartItemId Id of the cart item whose quantity is to be changed.
   * @param quantity New quantity value. Can be a number, or empty string.
   */
  const handleQuantityChange = (cartItemId: string, quantity: number | "") => {
    if (quantity >= 0 || quantity === "") {
      AppApi.changeItemQuantity(cartItemId, quantity).then(
        () => {
          props.handleCartChange();
        },
        (error) => {
          setError(CART_UPDATE_ERROR);
        }
      );
    }
  };

  return (
    <div className="cart-page">
      {props.cart == null || (props.cart.items.length <= 0 && <EmptyCartSection />)}
      {props.cart != null && props.cart!.items.length > 0 && (
        <div className="container cart-summary MuiPaper-elevation1">
          <h3>
            {props.cart!.items.length} {pluralize("item", props.cart!.items.length)} in your cart
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
              const product = props.products.find((x) => x.id === cartItem.productId)!;

              if (product != null) {
                return (
                  <div>
                    {product != null && (
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
                        <div className="col col-2 quantity">
                          <TextField
                            id="outlined-number"
                            type="number"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            variant="outlined"
                            onChange={(event: any) => handleQuantityChange(cartItem.id, event.target.value)}
                            value={cartItem.quantity == null ? "" : cartItem.quantity}
                          />
                        </div>
                        <div className="col col-2 unit-price">
                          {cartItem.quantity !== 1 && `$${product?.price} each`}
                        </div>
                        <div className="col col-2 amount">${(cartItem.quantity * product.price).toFixed(2)}</div>
                        <div className="col col-1">
                          <IconButton onClick={() => handleDeleteClick(cartItem.id)} style={{ color: "#B00020" }}>
                            <Delete />
                          </IconButton>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
            })}
            <Divider style={{ marginBottom: 10 }} />
            <div className="row total-row">
              <div className="col col-9" style={{ textAlign: "right" }}>
                Total
              </div>
              <div className="col col-2 amount">${props.cart?.totalCost.toFixed(2)}</div>
            </div>
          </div>
        </div>
      )}
      <ErrorSnackBar error={error} onClose={() => setError("")} />
    </div>
  );
}

function EmptyCartSection() {
  return (
    <div className="empty-cart-section">
      <div>
        <div>
          <img src="assets/planet_family.png"></img>
          <h1>Your cart is empty...</h1>
          Check out our <Link to={Routes.Product}>product page</Link> to see all the wonderful planets we have on offer!
        </div>
      </div>
    </div>
  );
}
