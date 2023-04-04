import { useState } from "react";

export function DisplayJobPostings({ jobPostings }) {
  // const [selectedJobType, setSelectedJobType] = useState([]);
  const [rerenderer, setRerenderer] = useState(false);
  const selectedJobType = [];
  const checkHandler = (event) => {
    const jobSelected = event.target.value;
    const isChecked = event.target.checked;
    // console.log(isChecked);

    if (isChecked) {
      selectedJobType = [...selectedJobType, jobSelected];
    } else {
      selectedJobType(selectedJobType.filter((c) => c !== jobSelected));
    }
  };

  const filteredJobList = (jobPostings) =>
    selectedJobType.length
      ? jobPostings.filter((jobPosting) =>
          selectedJobType.includes(jobPosting.jobType)
        )
      : jobPostings;
  return (
    <>
      <h1>Question C1</h1>
      {["full-time", "part-time", "contract"].map((jobtype) => (
        <label key={jobtype.id}>
          <input
            checked={selectedJobType.includes(jobtype)}
            type="checkbox"
            value={jobtype}
            onChange={checkHandler}
          />
          {jobtype}
        </label>
      ))}
      {filteredJobList(jobPostings).map((jobs) => (
        <div key={jobs.id}>
          <h3>{jobs.jobTitle}</h3>
          <p>{jobs.company}</p>
        </div>
      ))}
    </>
  );
}
