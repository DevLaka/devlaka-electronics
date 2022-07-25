import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";

// Importing SVG as components
import { ReactComponent as Logo } from "../../assets/logo_icon.svg";
import "./navigation.styles.scss";

// Step 8
// Define Navigation Component
const Navigation = () => {
  return (
    // Using Fragment instead of unnecessary div
    // Shorthand: <> </>
    // Shorthand can be used in this scenario but it does not support key attribute.
    <Fragment>
      <div className="navigation">
        {/* Step 12 */}
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        {/* Step 11 */}
        {/* Define Links */}
        {/* Link component behaves like a anchor tag */}
        {/* Whatever we wrap in a link will give the child node navigation functionality */}
        <div className="nav-links-container">
          {/* This link navigates to /shop */}
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
        </div>
      </div>
      {/* Define where to render the nested route components */}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
