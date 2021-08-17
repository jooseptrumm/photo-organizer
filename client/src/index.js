// Import React and Redux dependencies.

import React from 'react';
import ReactDOM from 'react-dom';
import {
  createStore
} from "redux";
import {
  Provider
} from "react-redux";

// Import global CSS files.

import './css/global.css';
import './css/resets.css';
import './css/variables.css';

// Import custom dependencies.

import App from './App';
import rootReducer from "./reducers";

// Create the redux store.

const store = createStore(rootReducer);

// Render the App component inside react-redux provider and wire up the redux store.

ReactDOM.render(
  <Provider store ={store}>
  <App/>
  </Provider>,
  document.getElementById('root')
);
