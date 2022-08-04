const INITIAL_STATE = {
  currentUser: null,
};

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

// Step 4
// Define userReducer
// When using reducer with context we passed initial state to useReducer hook.
// Here, instead we give a default value for initial state.
// IOW, If nothing gets passed, then use the initial state.
// And the only time where state is not getting passed is when it runs for the first time.
export const userReducer = (state = INITIAL_STATE, action) => {
  console.log("Dispatching");
  console.log({ action });
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    // Unlike in context, redux reducers receives every single action that gets dispatched.
    // So that, we have to return the current state in default case.
    default:
      return state;
  }
};
