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
import { jobPostings } from "./QC1/jobPostings";
import { DisplayJobPostings } from "./QC1/DisplayJobPostings";
import { events } from "./QC2/events";
import { DisplayEvents } from "./QC2/DisplayEvents";
import { useState } from "react";

const workoutRoutines = [
  {
    name: "Pushups",
    duration: "5 minutes",
    equipment: ["bodyweight"],
    difficulty: "Beginner",
  },
  {
    name: "Squats",
    duration: "10 minutes",
    equipment: ["bodyweight"],
    difficulty: "Beginner",
  },
  {
    name: "Sit-ups",
    duration: "5 minutes",
    equipment: ["bodyweight"],
    difficulty: "Beginner",
  },
  {
    name: "Bicep curls",
    duration: "15 minutes",
    equipment: ["dumbbells"],
    difficulty: "Intermediate",
  },
  {
    name: "Deadlifts",
    duration: "20 minutes",
    equipment: ["dumbbells", "barbell"],
    difficulty: "Advanced",
  },
  {
    name: "Resistance band rows",
    duration: "10 minutes",
    equipment: ["resistance bands"],
    difficulty: "Intermediate",
  },
  {
    name: "Pull-ups",
    duration: "15 minutes",
    equipment: ["pull-up bar", "bodyweight"],
    difficulty: "Advanced",
  },
  {
    name: "Jumping jacks",
    duration: "5 minutes",
    equipment: ["none"],
    difficulty: "Beginner",
  },
  {
    name: "Burpees",
    duration: "10 minutes",
    equipment: ["none"],
    difficulty: "Intermediate",
  },
  {
    name: "Mountain climbers",
    duration: "5 minutes",
    equipment: ["none"],
    difficulty: "Intermediate",
  },
];

function DisplayWorkOutRoutines({ workoutRoutines }) {
  const [difficultyLevel, setDifficultyLevel] = useState([]);

  const changeHandler = (event) => {
    const selectedLevel = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setDifficultyLevel([...difficultyLevel, selectedLevel]);
    } else {
      setDifficultyLevel(
        difficultyLevel.filter((level) => level != selectedLevel)
      );
    }
  };

  const arrayToBeDisplayed = difficultyLevel.length
    ? workoutRoutines.filter((routine) =>
        difficultyLevel.includes(routine.difficulty)
      )
    : workoutRoutines;

  return (
    <>
      <h1>Question C3</h1>
      {["Beginner", "Intermediate", "Advanced"].map((difficulty) => (
        <label>
          <input
            type="checkbox"
            value={difficulty}
            checked={difficultyLevel.includes(difficulty)}
            onChange={changeHandler}
          />
          {difficulty}
        </label>
      ))}
      {arrayToBeDisplayed.map(({ name, duration, equipment, difficulty }) => (
        <>
          <h3>{name}</h3>
          <p>{duration}</p>
          <p>{equipment}</p>
          <p>{difficulty}</p>
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
      <DisplayListOfFilteredProducts products={products1} />
      <DisplayFilteredBooks books={books1} />
      <DisplayFilteredMovies movies={moviesData} />
      <DisplayJobPostings jobPostings={jobPostings} />
      <DisplayEvents events={events} />
      <DisplayWorkOutRoutines workoutRoutines={workoutRoutines} />
    </div>
  );
}

export default App;
