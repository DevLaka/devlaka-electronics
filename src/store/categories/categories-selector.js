import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

// This selector will only run if the category slice object that we get back from this selector is different.
// 2 arguments.
// 1. Array of input selectors.
// The input selector is the parameters that will be used to produce the output.
// Or the slice we want from redux state to generate the output.
// 2. Output selector.
export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
