// Step 8
// Importing saga based effect generators.
// Similar to the methods that we use inside of regular generator functions.
// However, sagas have redux bindings on them, meaning that we're able to access the Redux store, we're
// able to dispatch to it, using these methods.
import { takeLatest, all, call, put } from "redux-saga/effects";

// Step 9
import { getCategoriesAndDocuments } from "../../utils/firebase.utils.js/firebase.utils";
// Here, we don't import fetchCategoriesStart
import {
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from "./categories.action";
import { CATEGORIES_ACTION_TYPES } from "./categories.types";

// Step 11
// Write our first saga.
// Converting fetchCategoriesAsync thunk to a saga.
export function* fetchCategoriesAsync() {
  try {
    // yield inside generator function is similar to await inside async function.
    // But, here we want to use the call keyword.
    // The first argument of the call is a variable, which is a callable method.
    // The second argument is the parameter we have to pass for the first argument.
    // IOW, we are passing the categories string, to getCategoriesAndDocuments function and ask the function to run.
    const categoriesArray = yield call(getCategoriesAndDocuments, "categories");
    // Instead, of dispatch, put is used inside of a generator
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriesFailed(error));
  }
}

// Step 12
// take is where we receive actions.
// take latest means, If you hear a bunch of the same action, give me the latest one.
// The flow is we take the latest FETCH_CATEGORIES_START action, and we're going to initialize the fetchCategoriesAsync saga.
export function* onFetchCategories() {
  // takeLatest takes 2 arguments.
  // 1. Action type 2. The code that should be run.
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

// Step 10
// Setup the exports.
// Accumulator that holds all of sagas that are related to the categories.
export function* categoriesSaga() {
  // Run everything inside and only complete when all of it is done.
  // IOW, code after all() doesn't run until code inside all() runs.
  // Takes an array of things that should be completed before resuming.
  // Step 13
  // Add onFetchCategories saga here.
  // So, this categoriesSaga aggregator or accumulator will listen to this.
  yield all([call(onFetchCategories)]);
}
