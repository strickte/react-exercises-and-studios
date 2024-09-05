import data from "./../data.json";
import { useState } from "react";

export default function MyProjects() {
  const [index, setIndex] = useState(0);
  const projectList = data.projects;
  let project = projectList[index];
  function handleClick() {
    if (index < data.projects.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }
  return (
    <div>
      <button onClick={handleClick}>Next</button>
      <h3>{project.pattern}</h3>
      <h4>{project.yarn}</h4>
      <figure>
        <img src={project.photoUrl} alt={project.alt}></img>
      </figure>
    </div>
  );
}
