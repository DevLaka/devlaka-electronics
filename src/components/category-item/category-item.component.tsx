import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { DirectoryCategory } from "../category-list/category-list.component";
import {
  BackgroundImage,
  Body,
  CategoryItemContainer,
} from "./category-item.styles";

type CategoryItemProps = {
  category: DirectoryCategory;
};

const CategoryItem: FC<CategoryItemProps> = ({
  category: { imageUrl, title, route },
}) => {
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
  return (
    <CategoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
      <Body>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
