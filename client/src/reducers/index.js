// This file holds redux reducers.

// Import Redux dependencies.

import {
  combineReducers
} from "redux";

// A dummy reducer.

const dummyReducer = (state = null, action) => {

  return state;
};


// Combine all reducers into one root reducer.

const rootReducer = combineReducers({
  dummy: dummyReducer
});

// Export the root reducer.

export default rootReducer;
