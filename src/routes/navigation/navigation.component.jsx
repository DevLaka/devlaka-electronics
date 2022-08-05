import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase.utils.js/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { ReactComponent as Logo } from "../../assets/logo_icon.svg";
import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./navigation.styles";
// Step 27
// Allows us to interact from a component with the Redux store.
import { useSelector } from "react-redux";

// Step 30
import { selectCurrentUser } from "../../store/user/user-selector";

const Navigation = () => {
  // Step 28
  // Using useSelector to get only the part of the state we want.
  // state or the store is a one big object made out of smaller reducers.
  // Accessing order => State OBJ => user Reducer (We gave the reducer a name in step 6) => currentUser.
  // This selector will update when the state object changes.
  // In step 29, Move this to separate file for reusability.
  // const currentUser = useSelector((state) => state.user.currentUser);

  // Step 31
  // Same as step 29, but now get the function from separated file.
  const currentUser = useSelector(selectCurrentUser);

  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <Logo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          <NavLink to="/auth">
            {currentUser ? (
              <NavLink as="span" onClick={signOutUser}>
                SIGN OUT
              </NavLink>
            ) : (
              <NavLink as="span">SIGN IN</NavLink>
            )}
          </NavLink>
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
