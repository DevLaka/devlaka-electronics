import './categories.styles.scss'

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Laptops",
    },
    {
      id: 2,
      title: "Desktops",
    },
    {
      id: 3,
      title: "Memory",
    },
    {
      id: 4,
      title: "Storage",
    },
    {
      id: 5,
      title: "Graphic Cards",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map(({ title, id }) => (
        <div key={id} className="category-container">
          <div className="background-image"></div>
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
