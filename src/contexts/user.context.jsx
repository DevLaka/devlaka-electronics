// Topic: Use Reducers inside contexts
import { createContext } from "react";

// Step 12
// Commenting useState import because we don't store our State in React state anymore.
// import { useState } from "react";
import { useEffect } from "react";

// Step 2
// Import useReducer hook
import { useReducer } from "react";

import { onAuthStateChangedListener } from "../utils/firebase.utils.js/firebase.utils";
import { createUserDocumentFromAuth } from "../utils/firebase.utils.js/firebase.utils";

// Step 4
// Keeping context as the same.
// Here, context is the values that we store.
// Task is to keep the context same and introduce reducers.
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// Step 5
// Define constant for action types
export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

// Step 6
// Create reducer
const userReducer = (state, action) => {
  console.log("Dispatching");
  console.log({ action });
  const { type, payload } = action;

  // Based on the type the returning state object will be different
  switch (type) {
    case "SET_CURRENT_USER":
      // Spreading the current state values and update currentUser.
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in the userReducer`);
  }
};

// Step 7
// Define Initial state
const INITIAL_STATE = {
  currentUser: null,
};

export const UserProvider = ({ children }) => {
  // Step 3
  // Commenting out useState because we don't useState to store the values anymore.
  // We are going to replace it with reducer.
  // const [currentUser, setCurrentUser] = useState(null);

  // Step 8
  // Utilizing userReducer.
  // 2 Arguments => 1. Reducer 2. Initial state
  // Returns state object and dispatch function.
  // State => current state object stored by this reducer.
  // Dispatch => function that dispatches the given action on the reducer
  // (Here, it is userReducer).
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

  // Step 10
  // Accessing current user from state object.
  // In context, this was stored on React state.
  // But, here it is a state object.
  const { currentUser } = state;
  console.log({ currentUser });

  // Step 9
  // Argument => Payload that is to be sent to the reducer.
  const setCurrentUser = (user) => {
    // Calling dispatch.
    // Argument => action object.
    // When the dispatch is called dispatch will pass the action to the userReducer.
    // Then the reducer we defined in step 6 will run.
    // When the reducer returns new state object,
    // the useReducer hook will be triggered and generate new state object.
    // Then, because there is a new state object generated, the whole functional component will run,
    // passing the current user value to all the components that is hooked into this context.
    // In short, Earlier when we use context with useState, when setState gets called, state gets updated and the functional component re runs.
    // And now, when we use context with Reducer, Whenever dispatch gets called, a new state object is returned, then it will rerun the functional component.
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
  };

  const value = { currentUser, setCurrentUser };

  // Step 11
  // This code used for context is still valid.
  // Only difference is we used useState in context and now we user useReducer.
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// Step 1
// What is a reducer?
// Just a function that return back an object.
// Given the current state and action, it returns the new state object.
/*
const userReducer = (state, action) => {
  return {
    currentUser: null
  }
}
*/
