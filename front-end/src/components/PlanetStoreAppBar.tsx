// React imports
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

// Material-UI imports
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";

// Icon imports
import Person from "@material-ui/icons/Person";
import ShoppingCart from "@material-ui/icons/ShoppingCart";

// Local imports
import { Routes } from "domain/routes";

import "./PlanetStoreAppBar.css";

/**
 * Component for the bar that sits at the top of the app.
 */
function PlanetStoreAppBar() {
  const history = useHistory();

  /**
   * Function for handling when one of navigation links are clicked. Redirects to the provided route.
   *
   * @param route Route to redirect to.
   */
  const handleClick = (route: Routes) => {
    history.push(route);
  };

  return (
    <div className="ps-app-bar">
      <AppBar position="static">
        <Toolbar className="toolbar">
          <div>
            <Link to={Routes.Product}>
              <IconButton edge="start" disableRipple={true}>
                <img src="assets/logo.png" style={{ height: 40, width: 40 }}></img>
              </IconButton>
              <span className="store-title">Planetary Super Store</span>
            </Link>
          </div>
          <div className="button-section">
            <IconButton onClick={() => handleClick(Routes.SignIn)}>
              <Person />
            </IconButton>
            <IconButton edge="end" onClick={() => handleClick(Routes.Cart)}>
              <ShoppingCart />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default PlanetStoreAppBar;
