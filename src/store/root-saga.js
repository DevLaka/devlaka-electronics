// Step 1
// Like reducers, there is a root saga.
// Root saga encapsulates all of the different sagas.
import { all, call } from "redux-saga/effects";

// Step 14
// Import categories saga
import { categoriesSaga } from "./categories/category.saga";

// Step 2
// Create and export a JS generator function.
export function* rootSaga() {
  // Step 15
  // Add categoriesSaga to root saga
  yield all([call(categoriesSaga)]);
}
