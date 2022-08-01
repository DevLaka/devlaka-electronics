import { Outlet } from "react-router-dom";
import CategoryList from "../../components/category-list/category-list.component";

const Home = () => {
  return (
    <div>
      <CategoryList />
      <Outlet />
    </div>
  );
};

export default Home;
