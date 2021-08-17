// Import React dependencies.

import React from "react";
import {Router, Route} from "react-router-dom";

// Import the custom history.

import history from "./history";

import Navbar from "./components/Navbar/Navbar";

// Create the App component.

function App() {
  return (
    <div>
    <Router history={history}>
      <Navbar/>
  </Router>
</div>
);

}

// Export the App component.

export default App;
