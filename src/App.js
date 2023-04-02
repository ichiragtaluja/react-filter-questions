import logo from "./logo.svg";
import "./App.css";
import { products } from "./QA1/products";
import { DisplayProducts } from "./QA1/DisplayProducts";
import { books } from "./QA2/books";
import { DisplayBooks } from "./QA2/DisplayBooks";

function App() {
  return (
    <div className="App">
      <DisplayProducts products={products} />
      <DisplayBooks books={books} />
    </div>
  );
}

export default App;
