import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartProvider from "./components/CartProvider.js";
import LoginProvider from './components/LoginProvider.js';
import SearchProvider from "./components/SearchProvider.js";
import TokenProvider from "./components/TokenProvider.js";


ReactDOM.render(
  <React.Fragment>
    <CartProvider>
    <LoginProvider>
    <TokenProvider>
    <SearchProvider>
      <App />
    </SearchProvider>
    </TokenProvider>
    </LoginProvider>
    </CartProvider>
  </React.Fragment>,
  document.getElementById('root')
);


