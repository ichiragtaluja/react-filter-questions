import { useState } from "react";

export function DisplayBooks({ books }) {
  const [minYear, setMinYear] = useState();

  const filterFunction = (event) => {
    const minimumYear = event.target.value;
    setMinYear(minimumYear);
  };
  const filteredBooks = (books) => {
    if (minYear) {
      return books.filter((book) => book.year > minYear);
    } else {
      return books;
    }
  };

  return (
    <>
      <h1>Question A2</h1>
      <input onChange={filterFunction} type="number" placeholder="enter year" />
      {filteredBooks(books).map(({ title, author, genre, year }) => (
        <>
          <h3>{title}</h3>
          <p>{author}</p>
          <p>{genre}</p>
          <p>{year}</p>
        </>
      ))}
    </>
  );
}
