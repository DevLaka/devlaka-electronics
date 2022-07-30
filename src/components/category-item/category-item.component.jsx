import "./category-item.styles.scss";

const CategoryItem = ({ category: { imageUrl, title } }) => {
  return (
    <div className="category-item-container">
      <div
        className="background-image"
        // Applying dynamic css by passing a style object.
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="category-item-body-container">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
