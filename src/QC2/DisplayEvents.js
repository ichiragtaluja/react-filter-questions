import { useState } from "react";

export function DisplayEvents({ events }) {
  const [selectedChoices, setSelectedChoices] = useState([]);

  const changeHandler = (event) => {
    const isChecked = event.target.checked;
    console.log(isChecked);
    const typeSelected = event.target.value;

    if (isChecked) {
      setSelectedChoices([...selectedChoices, typeSelected]);
    } else {
      const newArr = selectedChoices.filter((type) => type !== typeSelected);
      setSelectedChoices(newArr);
    }
  };

  const filteredOutput = selectedChoices.length
    ? events.filter((ev) => selectedChoices.includes(ev.type))
    : events;
  return (
    <>
      <h1>Question C2</h1>
      {["sports", "theater", "music"].map((type) => (
        <label key={type}>
          <input
            // checked={selectedChoices.includes(type)}
            onChange={changeHandler}
            type="checkbox"
            value={type}
          />
          {type}
        </label>
      ))}
      {filteredOutput.map((ex) => (
        <div key={ex.id}>
          <h3>{ex.name}</h3>
          <p>{ex.date}</p>
          <p>{ex.location}</p>
          <p>{ex.price}</p>
          <p>{ex.type}</p>
        </div>
      ))}
    </>
  );
}
