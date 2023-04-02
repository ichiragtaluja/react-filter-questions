import { useState } from "react";

export function DisplayProducts({ products }) {
  const [displayProducts, setDisplayProducts] = useState(products);

  const filterProducts = (event) => {
    let maximumPrice = event.target.value;
    if (maximumPrice) {
      let filteredList = products.filter((product) => {
        return product.price < maximumPrice;
      });
      setDisplayProducts(filteredList);
    } else setDisplayProducts(products);
  };

  return (
    <>
      <h1>Question A1</h1>
      <input
        onChange={filterProducts}
        type="number"
        placeholder="Maximum Price"
      />
      <ol>
        {displayProducts.map(({ id, name, price, category }) => (
          <li>
            <h3>{name}</h3>
            <p>Rs: {price}</p>
            <p>{category}</p>
          </li>
        ))}
      </ol>
    </>
  );
}
