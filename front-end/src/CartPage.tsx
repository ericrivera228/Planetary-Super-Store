import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

import { Routes } from "./routes";

import image from "./images/planet_family.png";

import "./CartPage.css";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const history = useHistory();

  const handleClick = (newPath: Routes) => {
    history.push(newPath);
  };

  return (
    <div className="cart-page">
      {cartItems.length <= 0 && (
        <div className="empty-cart-section">
          <div>
            <div>
              <img src={image}></img>
              <h1>Your cart is empty</h1>
              Check out our <Link to={Routes.Product}>product page</Link> to see
              all the wonderful planets we have on offer!
            </div>

            <div className="action-footer">
              <Button
                variant="contained"
                onClick={() => handleClick(Routes.Product)}
              >
                Shop as Guest
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleClick(Routes.SignIn)}
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
