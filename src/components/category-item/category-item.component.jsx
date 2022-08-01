import {
  BackgroundImage,
  Body,
  CategoryItemContainer,
} from "./category-item.styles";

const CategoryItem = ({ category: { imageUrl, title } }) => {
  return (
    <CategoryItemContainer>
      <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
      <Body>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
