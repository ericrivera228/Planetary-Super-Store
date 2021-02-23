// React imports
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// Material UI imports
import { deepPurple } from "@material-ui/core/colors";
import { orange } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

// Local imports
import PlanetStoreAppBar from "components/PlanetStoreAppBar";
import { Routes } from "domain/routes";
import CartPage from "pages/CartPage";
import ProductPage from "pages/ProductPage";
import SignInPage from "pages/SignInPage";

import "./PlanetStore.css";

const DEFAULT_PAGE = Routes.Cart;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: deepPurple[500],
    },
    secondary: {
      main: orange[500],
    },
  },
});

function PlanetStore() {
  return (
    <Router>
      <div className="App">
        <ThemeProvider theme={theme}>
          <PlanetStoreAppBar />

          <div className="container">
            <Switch>
              <Route exact path="/">
                <Redirect to={DEFAULT_PAGE} />
              </Route>
              <Route path={Routes.Cart}>
                <CartPage />
              </Route>
              <Route path={Routes.SignIn}>
                <SignInPage />
              </Route>
              <Route path={Routes.Product}>
                <ProductPage />
              </Route>
            </Switch>
          </div>
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default PlanetStore;
