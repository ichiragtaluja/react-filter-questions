import { useState } from "react";

export function DisplayFilteredMovies({ movies }) {
  const [genre, setGenre] = useState();

  const clickHandler = (event) => {
    const selectedGenre = event.target.value;
    if (selectedGenre !== genre) {
      setGenre(() => selectedGenre);
    } else {
      setGenre();
    }
  };

  const filteredMovieList = genre
    ? movies.filter((movie) => movie.genre === genre)
    : movies;
  return (
    <>
      <h1>Question B3</h1>
      <button onClick={clickHandler} value="action">
        Action
      </button>
      <button onClick={clickHandler} value="sci-fi">
        Sci-fi
      </button>
      <button onClick={clickHandler} value="drama">
        Drama
      </button>
      <button onClick={clickHandler} value="fantasy">
        Fantasy
      </button>
      <button onClick={clickHandler} value="animation">
        Animation
      </button>
      <button onClick={clickHandler} value="thriller">
        Thriller
      </button>
      {filteredMovieList.map(({ id, title, director, genre, releaseYear }) => (
        <div key={id}>
          <h3>{title}</h3>
          <p>{director}</p>
          <p>{genre}</p>
        </div>
      ))}
    </>
  );
}
