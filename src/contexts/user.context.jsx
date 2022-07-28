// Step 1
// Import createContext from react.
// Context: A component that stores data. An storage place.
import { createContext } from "react";

// Step 4
// To store the user object import useState hook.
import { useState } from "react";

// Step 20
import { useEffect } from "react";
import { onAuthStateChangedListener } from "../utils/firebase.utils.js/firebase.utils";

import { createUserDocumentFromAuth } from "../utils/firebase.utils.js/firebase.utils";

// Step 2
// Create context.
// Context API have 2 pieces.
// Piece 1. Context: Actual data we want to access.
// createContext will build the context for us.
// we are passing default value to the createContext method.
export const UserContext = createContext({
  // Step 7
  // Continue writing context.
  // null value passed to the useState at step 5 is for state.
  // Thus, we have to provide a initial value for the context also.
  // currentUser initially is empty. Thus, assigned null.
  // Thus, we know that there is no context when currentUser is null.
  currentUser: null,
  // Default set Function is set to null as well.
  setCurrentUser: () => null,
});

// Step 3
// Create Provider.
// Piece 2. Provider. Actual component.
// children are passed as the argument.
// Returns UserContext.Provider.
// Every context we built, there is a Provider.
// Provider is the component that will wrap around other components
// who need access to the context data.
// Just a component to wrap the children components who needs data.
export const UserProvider = ({ children }) => {
  // Step 5
  // Initialize User object or state.
  const [currentUser, setCurrentUser] = useState(null);

  // Step 6
  // Passing userState and the setter Function.
  // Thus, Provider allows child components to access its useState values.
  // In other words, we are able to set and get the value in every child component.
  const value = { currentUser, setCurrentUser };

  // Step 21
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    // In useEffect, the whatever we return from this callback runs when it un-mounts.
    // Unsubscribe function runs this when component unmounts.
    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
