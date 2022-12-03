import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";

import {
  Home,
  Products,
  SingleProduct,
  About,
  Cart,
  Error,
  Checkout,
  PrivateRoute,
} from "./pages";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact patch="/">
          <Home />
        </Route>
        <Route exact patch="/about">
          <About />
        </Route>
        <Route exact patch="/cart">
          <Cart />
        </Route>
        <Route exact patch="/products">
          <Products />
        </Route>
        <Route exact patch="/products/:id" children={<SingleProduct />} />
        <Route exact patch="/checkout">
          <Checkout />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
