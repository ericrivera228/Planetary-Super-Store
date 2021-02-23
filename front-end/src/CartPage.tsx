// React imports
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Material UI imports
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";

// Icon imports
import Delete from "@material-ui/icons/Delete";

// Local imports
import { Routes } from "./routes";
import image from "./images/planet_family.png";
import { Product } from "./product";

import "./CartPage.css";

//TODO: Remove this!
import blackHoldImg from "./images/black_hole.png";
import gardenPlanetImg from "./images/garden_planet.jpg";
import gasGiantImg from "./images/gas_giant.png";
import corePlanetImg from "./images/core_planet.jpg";
import gasGiantMoonImg from "./images/gas_giant_moon.png";
import gardenMoonImg from "./images/garden_moon.jpg";
import nukedGardenImg from "./images/nuked_garden.png";

//TODO: Remove this!
const mockCartItems: Product[] = [
  {
    name: "XK-991",
    price: 28.18,
    imageSrc: blackHoldImg,
    description:
      "Technically a black hole and not a planet. But while this beauty lacks a firm surface to stand on, it more than make up for with sheer gravitational power. We gurantee nothing in the enitre universe is escaping the attractive pull of XR-991!",
  },
  {
    name: "CH-228",
    price: 96.87,
    imageSrc: gardenPlanetImg,
    description:
      "Garden planets are this galactic epoch's hot ticket item. Fluffy clouds, lush forests, and never ending oceans means this planet can support all kinds of carbon based lifeforms! Buy now before it's too late!",
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(mockCartItems);

  const totalCost = cartItems
    .reduce((sum, current) => sum + current.price, 0)
    .toFixed(2);

  const pluralize = (word: string, count: number) => {
    return count > 1 ? word + "s" : word;
  };

  const handleDeleteClick = (name: string) => {
    setCartItems(cartItems.filter((x) => x.name !== name));
  };

  return (
    <div className="cart-page">
      {cartItems.length <= 0 && (
        <div className="empty-cart-section">
          <div>
            <div>
              <img src={image}></img>
              <h1>Your cart is empty...</h1>
              Check out our <Link to={Routes.Product}>product page</Link> to see
              all the wonderful planets we have on offer!
            </div>
          </div>
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="container cart-summary MuiPaper-elevation1">
          <h3>
            {cartItems.length} {pluralize("item", cartItems.length)} in your
            cart
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
            {cartItems.map((productToDisplay) => {
              return (
                <div className="row cart-row" key={productToDisplay.name}>
                  <div className="col col-2">
                    <img
                      src={productToDisplay.imageSrc}
                      style={{ width: "100%", borderRadius: "25px" }}
                    />
                  </div>
                  <div className="col col-3">
                    <h5>{productToDisplay.name}</h5>
                  </div>
                  <div className="col col-2 quantity">1</div>
                  <div className="col col-2 unit-price">
                    ${productToDisplay.price} each
                  </div>
                  <div className="col col-2 amount">
                    ${productToDisplay.price}
                  </div>
                  <div className="col col-1">
                    <IconButton
                      onClick={() => handleDeleteClick(productToDisplay.name)}
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
              <div className="col col-2 amount">${totalCost}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
