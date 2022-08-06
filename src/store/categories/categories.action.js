import { getCategoriesAndDocuments } from "../../utils/firebase.utils.js/firebase.utils";
import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./categories.types";

// Step 5
// Change the architecture to address async nature of thunk
// export const setCategories = (categoriesArray) =>
//   createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);

// These function are regular sync functions. Not async thunks.
export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  );

export const fetchCategoriesFailed = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

// Step 6
// Defining async thunks
// Just a function that returns a async function that gets a dispatch.
export const fetchCategoriesAsync = () => async (dispatch) => {
  // First, dispatch the fetch start action.
  dispatch(fetchCategoriesStart());
  try {
    const categoriesArray = await getCategoriesAndDocuments("categories");
    // If success, dispatch the success action with the returned data.
    dispatch(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    // If failed, dispatch the failed action.
    dispatch(fetchCategoriesFailed(error));
  }
};
