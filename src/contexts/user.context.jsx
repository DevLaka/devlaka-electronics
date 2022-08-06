import { createContext } from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import { onAuthStateChangedListener } from "../utils/firebase.utils.js/firebase.utils";
import { createUserDocumentFromAuth } from "../utils/firebase.utils.js/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const userReducer = (state, action) => {
  console.log("Dispatching");
  console.log({ action });
  const { type, payload } = action;

  // Based on the type the returning state object will be different
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      // Spreading the current state values and update currentUser.
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in the userReducer`);
  }
};

const INITIAL_STATE = {
  currentUser: null,
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
  const { currentUser } = state;
  console.log({ currentUser });

  const setCurrentUser = (user) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
  };

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
