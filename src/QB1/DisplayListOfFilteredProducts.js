import { useState } from "react";

export function DisplayListOfFilteredProducts({ products }) {
  const [displayedProducts, setDisplayedProducts] = useState(products);

  const clickHandler = (event) => {
    const filterCategory = event.target.value;
    // console.log(filterCategory);
    const filteredList = products.filter(
      (product) => product.category === filterCategory
    );
    console.log(filteredList);
    setDisplayedProducts(filteredList);
  };
  return (
    <>
      <h1>Question B1</h1>
      <button value="electronics" onClick={(event) => clickHandler(event)}>
        electronics
      </button>
      <button value="clothing" onClick={(event) => clickHandler(event)}>
        clothing
      </button>
      <button value="food" onClick={(event) => clickHandler(event)}>
        food
      </button>
      {displayedProducts.map(({ id, name, price, category, availability }) => (
        <>
          <h3 key={id}>{name}</h3>
          <p>{price}</p>
          <p>{category}</p>
          <p>{availability}</p>
        </>
      ))}
    </>
  );
}
