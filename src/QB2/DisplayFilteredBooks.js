import { useState } from "react";

export function DisplayFilteredBooks({ books }) {
  const [genre, setGenre] = useState();

  const clickHandler = (event) => {
    const selectedGenre = event.currentTarget.value;

    if (selectedGenre === genre) {
      setGenre();
    } else {
      setGenre(() => selectedGenre);
    }
  };

  const filteredBooks = (books) => {
    if (genre) {
      let newBooks = books.filter((book) => book.genre === genre);
      console.log(newBooks);
      return newBooks;
    } else {
      return books;
    }
  };

  return (
    <>
      <h1>Question B2</h1>
      <button onClick={clickHandler} value="Mystery">
        Mystery
      </button>
      <button onClick={clickHandler} value="Fiction">
        Fiction
      </button>
      <button onClick={clickHandler} value="Non-Fiction">
        Non-Fiction
      </button>
      {filteredBooks(books).map((book) => (
        <p key={book.id}>{book.title}</p>
      ))}
    </>
  );
}
