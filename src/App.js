import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
// Step 17
// Add imports
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase.utils.js/firebase.utils";
import { useEffect } from "react";

// Step 22
import { setCurrentUser } from "./store/user/user.action";

// Step 23
import { useDispatch } from "react-redux";

const App = () => {
  // Step 24
  const dispatch = useDispatch();

  // Step 16
  // Move useEffect to here.
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      // Step 25
      // Add action dispatching
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
    // Step 26 (optional)
    // Fix lint error by including dispatch in dependency array.
    // But, the dispatch will stay the same, will never change.
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
