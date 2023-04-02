import logo from "./logo.svg";
import "./App.css";
import { products } from "./QA1/products";
import { DisplayProducts } from "./QA1/DisplayProducts";
import { books } from "./QA2/books";
import { DisplayBooks } from "./QA2/DisplayBooks";
import { useState } from "react";

const movies = [
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    rating: 9.3,
    genre: "Drama",
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    rating: 9.2,
    genre: "Crime",
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    rating: 9.0,
    genre: "Action",
  },
  {
    title: "12 Angry Men",
    director: "Sidney Lumet",
    rating: 8.9,
    genre: "Drama",
  },
  {
    title: "Schindler's List",
    director: "Steven Spielberg",
    rating: 8.9,
    genre: "History",
  },
];

function DisplayMovies({ movies }) {
  const [minRating, setMinRating] = useState();

  const filterByRatings = (event) => {
    const minimumMovieRating = event.target.value;
    setMinRating(minimumMovieRating);
  };

  const filteredMovies = (movies) => {
    if (minRating) {
      const filteredMovies = movies.filter((movie) => movie.rating > minRating);
      return filteredMovies;
    } else {
      return movies;
    }
  };

  // setDisplayMovies();

  return (
    <>
      <h1>Question A3</h1>
      <input
        onChange={filterByRatings}
        placeholder="enter rating"
        type="number"
      />
      {filteredMovies(movies).map(({ title, director, rating, genre }) => (
        <>
          <h3>{title}</h3>
          <p>{director}</p>
          <p>{rating}</p>
          <p>{genre}</p>
        </>
      ))}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <DisplayProducts products={products} />
      <DisplayBooks books={books} />
      <DisplayMovies movies={movies} />
    </div>
  );
}

export default App;
