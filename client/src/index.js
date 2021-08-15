// Import React and Redux dependencies.

import React from 'react';
import ReactDOM from 'react-dom';
import {
  createStore
} from "redux";
import {
  Provider
} from "react-redux";

// Import custom dependencies.

import './index.css';
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
