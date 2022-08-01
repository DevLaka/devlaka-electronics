import { createContext } from "react";

import { useState } from "react";

import { useEffect } from "react";
import { onAuthStateChangedListener } from "../utils/firebase.utils.js/firebase.utils";

import { createUserDocumentFromAuth } from "../utils/firebase.utils.js/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

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
