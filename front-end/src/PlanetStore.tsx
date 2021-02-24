// React imports
import React, { useEffect, useState } from "react";
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
import { AppApi } from "appApi";
import PlanetStoreAppBar from "components/PlanetStoreAppBar";
import { Cart } from "domain/cart";
import { Product } from "domain/product";
import { Routes } from "domain/routes";
import CartPage from "pages/CartPage";
import ProductPage from "pages/ProductPage";
import SignInPage from "pages/SignInPage";

import "./PlanetStore.css";

// Default page for the app to display when it starts up
const DEFAULT_PAGE = Routes.Cart;

const FATAL_ERROR =
  "Oh no! There was a fatal error. Unfortunately this means the app won't work. Check the console for details, " +
  "or just try again later and hopefully everything will just work out, ya know?";

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
  // Product & cart summary state variables live here at the app level so both the product and cart pages have access to it
  const [products, setProducts] = useState([] as Product[]);
  const [cart, setCart] = useState<Cart | null>(null);

  // Indicates if there was a error with one of the vital api calls. If there was, an error
  // will be displayed, and the app will be unusable
  const [error, setError] = useState("");

  // When the app mounts, get the list of procuts from the API. Only called once.
  useEffect(() => {
    AppApi.getProducts().then(
      (result: Product[]) => {
        setProducts(result);
      },
      (error) => {
        setError(FATAL_ERROR);
        console.log(error);
      }
    );
    AppApi.getCartSummary().then(
      (result: Cart) => {
        setCart(result);
      },
      (error) => {
        setError(FATAL_ERROR);
        console.log(error);
      }
    );
  }, []);

  const onCartChange = () => {
    AppApi.getCartSummary().then(
      (result: Cart) => {
        setCart(result);
      },
      (error) => {
        setError(FATAL_ERROR);
        console.log(error);
      }
    );
  };

  return (
    <Router>
      <div className="App">
        <ThemeProvider theme={theme}>
          <PlanetStoreAppBar />

          <div className="container">
            {error && (
              <div className="error-section">
                <div>
                  <div>
                    <img src="assets/bomb.png"></img>
                    <h1>This app has bombed... :(</h1>
                    {error}
                  </div>
                </div>
              </div>
            )}

            {!error && (
              <Switch>
                <Route exact path="/">
                  <Redirect to={DEFAULT_PAGE} />
                </Route>
                <Route path={Routes.Cart}>
                  <CartPage
                    products={products}
                    cart={cart}
                    handleCartChange={onCartChange}
                  />
                </Route>
                <Route path={Routes.SignIn}>
                  <SignInPage />
                </Route>
                <Route path={Routes.Product}>
                  <ProductPage
                    products={products}
                    cart={cart}
                    handleCartChange={onCartChange}
                  />
                </Route>
              </Switch>
            )}
          </div>
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default PlanetStore;
