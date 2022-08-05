// Step 2
import { combineReducers } from "redux";

// Step 5
import { userReducer } from "./user/user-reducer";

// Step 3
// combineReducers is a method that allows us to create a final big reducer
// combining smaller reducers together
export const rootReducer = combineReducers({
  // Step 6
  // Combining state objects of all reducers and creating a one bing state object.
  // Giving the user Reducer a name of user.
  user: userReducer,
});
