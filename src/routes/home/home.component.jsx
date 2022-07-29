import CategoryList from "../../components/category-list/category-list.component";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <CategoryList />
      <Outlet />
    </div>
  );
};

export default Home;
