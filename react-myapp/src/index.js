import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";

import registerServiceWorker from './registerServiceWorker';
import Products from './products';
import Categories from './categories';

import store from './store';


 

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <Categories />
        <Products />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
    
 


registerServiceWorker();
