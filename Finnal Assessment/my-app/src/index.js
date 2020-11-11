import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import Products from "./products";
import Categories from "./categories";
import Cart from './cart';
import TimerContainer from './timer/TimerContainer';
import Home from './Home';

import store from "./store";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store }>
      
        <h1>My Shopping Cart</h1>
        <div>
          <span>
            [ <Link to="/">Home</Link> ]
          </span>
         
          <span>
            [ <Link to="/categories">Categories</Link> ]
          </span>
          <span>
            [ <Link to="/products">Products</Link> ]
          </span>
          <span>
            [ <Link to="/cart">Cart [{}]</Link> ]
          </span>

        </div>
        <hr />
        {/* <TimerContainer /> */}
        <Switch>
          <Route path="/categories" component={Categories}/>
          <Route path="/products" component={Products}/>
          <Route path="/cart" component={Cart}/>
          <Route exact path="/" component={Home} />
        </Switch>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


