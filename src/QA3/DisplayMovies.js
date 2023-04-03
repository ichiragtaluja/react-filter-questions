import { useState } from "react";

export function DisplayMovies({ movies }) {
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
