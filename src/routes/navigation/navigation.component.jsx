import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";

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
          <div>Logo</div>
        </Link>
        {/* Step 11 */}
        {/* Define Links */}
        {/* Link component behaves like a anchor tag */}
        {/* Whatever we wrap in a link will give the child node navigation functionality */}
        <div className="links-container">
          {/* This link navigates to /shop */}
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
        </div>
        <h1>Navigation</h1>
        {/* Define where to render the nested route components */}
        <Outlet />
      </div>
    </Fragment>
  );
};

export default Navigation;
