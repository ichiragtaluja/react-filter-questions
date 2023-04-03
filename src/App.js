import logo from "./logo.svg";
import "./App.css";
import { products } from "./QA1/products";
import { DisplayProducts } from "./QA1/DisplayProducts";
import { books } from "./QA2/books";
import { DisplayBooks } from "./QA2/DisplayBooks";
import { DisplayMovies } from "./QA3/DisplayMovies";
import { movies } from "./QA3/movies";
import { DisplayListOfFilteredProducts } from "./QB1/DisplayListOfFilteredProducts";
import { products1 } from "./QB1/products1";
import { books1 } from "./QB2/books1";
import { DisplayFilteredBooks } from "./QB2/DisplayFilteredBooks";
import { moviesData } from "./QB3/moviesData";
import { DisplayFilteredMovies } from "./QB3/DisplayFilteredMovies";

function App() {
  return (
    <div className="App">
      <DisplayProducts products={products} />
      <DisplayBooks books={books} />
      <DisplayMovies movies={movies} />
      <DisplayListOfFilteredProducts products={products1} />
      <DisplayFilteredBooks books={books1} />
      <DisplayFilteredMovies movies={moviesData} />
    </div>
  );
}

export default App;
