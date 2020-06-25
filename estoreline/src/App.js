import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HeaderView } from "./components/HeaderView";
import { FooterView } from "./components/FooterView";
import ContactUs from "./modules/contact/ContactUs";
import { HomePage } from "./modules/home/HomePage";
import { AboutUs } from "./modules/home/AboutUs";
import { StoreCollections } from "./modules/collection/StoreCollections";
import { ProductDetails } from "./modules/product/ProductDetails";

const App = () => {
  return (
    <div class="container-fluid d-block m-0 p-0">
      <HeaderView />
      <div style={{ paddingTop: 80 }}>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route
              exact
              path="/collection/:id"
              component={StoreCollections}
            ></Route>
            <Route exact path="/about" component={AboutUs}></Route>
            <Route exact path="/contact" component={ContactUs}></Route>
            <Route exact path="/product-details" component={ProductDetails}></Route>
          </Switch>
        </Router>
      </div>
      {/* <FooterView /> */}
    </div>
  );
};

export default App;
