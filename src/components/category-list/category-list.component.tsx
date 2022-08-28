import { Key } from "react";
import CategoryItem from "../category-item/category-item.component";
import { CategoriesContainer } from "./category-list.styles";

export type DirectoryCategory = {
  id: Key;
  title: string;
  imageUrl: string;
  route: string;
};

const categories: DirectoryCategory[] = [
  {
    id: 1,
    title: "Laptops",
    imageUrl:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    route: "shop/laptops",
  },
  {
    id: 2,
    title: "Desktops",
    imageUrl:
      "https://images.unsplash.com/photo-1619597455322-4fbbd820250a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    route: "shop/desktops",
  },
  {
    id: 3,
    title: "Memory",
    imageUrl:
      "https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    route: "shop/memory",
  },
  {
    id: 4,
    title: "Storage",
    imageUrl:
      "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    route: "shop/storage",
  },
  {
    id: 5,
    title: "Graphic Cards",
    imageUrl:
      "https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    route: "shop/graphic cards",
  },
];

const CategoryList = () => {
  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </CategoriesContainer>
  );
};

export default CategoryList;
