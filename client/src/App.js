// Import React dependencies.

import React from "react";
import {Router, Route} from "react-router-dom";

// Import the custom history.

import history from "./history";

// Create the App component.

function App() {
  return (
    <Router history={history}>

  </Router>);
}

// Export the App component.

export default App;
