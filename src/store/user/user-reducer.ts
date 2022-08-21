import { USER_ACTION_TYPES } from "./user.types";
import {
  SignInFailed,
  signUpFailed,
  signOutFailed,
  signOutSuccess,
  signInSuccess,
  singInFailed,
} from "./user.action";
import { AnyAction } from "redux";
import { UserData } from "../../utils/firebase.utils/firebase.utils";

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
  if (signInSuccess.match(action)) {
    return {
      ...state,
      currentUser: action.payload,
    };
  }

  if (signOutSuccess.match(action)) {
    return {
      ...state,
      currentUser: null,
    };
  }

  if (
    singInFailed.match(action) ||
    signUpFailed.match(action) ||
    signOutFailed.match(action)
  ) {
    return {
      ...state,
      currentUser: action.payload,
    };
  }

  return state;
};
