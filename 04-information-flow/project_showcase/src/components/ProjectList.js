import ProjectListItem from "./ProjectListItem";
import { useState } from "react";

function ProjectList({ projects }) {

  // searchQuery is our state value: searchQuery = ""
  // setSearchQuery is the setter function: setSearchQuery(string)
  // useState is a react hook and it initializes state within a component. It's return value is an array of 2 elements: [state_value, setter_function]
  // We then perform array destructuring to extract these two elements and store inside of variables
  const [searchQuery, setSearchQuery] = useState("");

  // const searchQuery = useState("")[0]
  // const setSearchQuery = useState("")[1]

  const searchResults = projects.filter((project) => {
    return project.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const projectItems = searchResults.map((project) => {
    return <ProjectListItem key={project.id} project={project} />;
  });

  const handleOnChange = (e) => setSearchQuery(e.target.value);

  return (
    <section>
      <h2>Projects</h2>

      <div className="filter">
        <button>All</button>
        <button>Phase 5</button>
        <button>Phase 4</button>
        <button>Phase 3</button>
        <button>Phase 2</button>
        <button>Phase 1</button>
      </div>
      <input type="text" placeholder="Search..." onChange={handleOnChange} />

      <ul className="cards">{projectItems}</ul>
    </section>
  );
}

export default ProjectList;
