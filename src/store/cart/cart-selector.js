import { createSelector } from "reselect";

const selectCardReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCardReducer],
  (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCardReducer],
  (cart) => cart.isCartOpen
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);
