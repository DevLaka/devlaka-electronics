import CategoryList from "../../components/category-list/category-list.component";
// Step 5
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <CategoryList />
      {/* Step 7 */}
      {/* Define where to render the nested matching element using Outlet */}
      <Outlet />
    </div>
  );
};

export default Home;
