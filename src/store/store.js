// Topic: Setup redux.
// Step 1
import { compose, createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";

// Step 7
import { rootReducer } from "./root-reducer";

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log("type: ", action.type);
  console.log("payload: ", action.payload);
  console.log("currentState: ", store.getState());

  next(action);

  console.log("next state: ", store.getState());
};

// Step 8
// Define middleware.
// Middle wears are library helpers that run before an action hits the reducer.
// Dispatch and action => Hit the middleWare => Hit the Reducer.
// Specifically, logger middleware catch actions before they hit reducers and then log out the state.
const middleWares = [loggerMiddleware];

// Step 9
// Middle-wares are like enhancers.
// Calling apply middleware and composing.
const composedEnhancers = compose(applyMiddleware(...middleWares));

// Step 10
// Creating the store.
// 3 arguments.
// 1. Root reducer.
// 2. Any additional default state.
// 3. Composed Enhancers ( Simply middle-wares).
export const store = createStore(rootReducer, undefined, composedEnhancers);
