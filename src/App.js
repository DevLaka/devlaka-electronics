// Step 3
// Import Routes and Route Components.
// Used to assemble the routing at our application level.
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";

const App = () => {
  return (
    // Step 4
    // wrap the components that is going to be routable with the  Route component.
    // Routes component allows the application to register route level components
    // that will render a specific component when it matches a specific route.
    <Routes>
      {/* When the path matches to "/", Home component will be rendered. */}
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
