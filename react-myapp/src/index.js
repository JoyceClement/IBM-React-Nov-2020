import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import axios from 'axios'

import registerServiceWorker from './registerServiceWorker';
import Products from './products';
import Categories from './categories';

import store from './store';


 window['axios'] = axios;

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
