import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";

// Importing SVG as components
import { ReactComponent as Logo } from "../../assets/logo_icon.svg";
import "./navigation.styles.scss";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase.utils.js/firebase.utils";

const Navigation = () => {
  // Step 13
  // Access the currentUser in UserContext.
  // Important: This component re-renders when currentUser is updated.
  // In other words, any component that is listening for currentUser will render again.
  const { currentUser, setCurrentUser } = useContext(UserContext);

  // Step 23 : Commenting this
  // const signOutHandler = async () => {
  //   await signOutUser();
  //   setCurrentUser(null);
  // };

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/auth">
            {/* Step 16 */}
            {/* Using context */}
            {currentUser ? (
              <span className="nav-link" onClick={signOutUser}>
                SIGN OUT
              </span>
            ) : (
              <span className="nav-link">SIGN IN</span>
            )}
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
