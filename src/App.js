import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import Carts from "./containers/Carts"
import Header from "./containers/Header";
import "./App.css";
import ProductDetails from "./containers/ProductDetails";
import Homepage from "./containers/Homepage"
import Myaccount from "./containers/myaccount"

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header /> */}
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/products" exact component={ProductListing} />
          <Route path="/carts" exact component={Carts} />
          <Route path="/myaccount" exact component = {Myaccount} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
