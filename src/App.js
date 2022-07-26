// Step 3
// Import Routes and Route Components.
// Used to assemble the routing at our application level.
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";

const Shop = () => {
  return <h2>Shop component</h2>;
};

const App = () => {
  return (
    // Step 4
    // wrap the components that is going to be routable with the  Route component.
    // Routes component allows the application to register route level components
    // that will render a specific component when it matches a specific route.
    <Routes>
      {/* Step 5 */}
      {/* When the path matches to "/home", Home component will be rendered. */}
      {/* path => '/' => Nothing will render */}
      {/*
      <Route path="/home" element={<Home />} />
      */}

      {/* Step 6 */}
      {/* Defining nested routes */}
      {/* /home/shop */}
      {/* Home will be rendered for both /home and /home/shop */}
      {/* ie. /home => renders Home and /home/shop => renders Home */}
      {/* Step 7 will fix this. Home will be persistent.
      ie. /home => renders home and /home/shop renders both */}
      {/*
      <Route path="home" element={<Home />}>
        <Route path="shop" element={<Shop />} />
      </Route>
      */}

      {/* Step 9 */}
      {/* / => render only navigation */}
      {/* /home => renders Navigation and Home */}
      {/* /shop => renders Navigation and Shop */}
      {/*
      <Route path="/" element={<Navigation />}>
        <Route path="home" element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    */}

      {/* Step 10 */}
      {/* / => render only navigation and Home*/}
      {/* /shop => renders Navigation and Shop */}
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
