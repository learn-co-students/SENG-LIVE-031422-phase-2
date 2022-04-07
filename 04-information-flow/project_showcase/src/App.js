// named import: reserved for helper functions. WE DO NOT USE THIS FOR COMPONENTS
// when importing: am i actually using this data/component inside this file? if no, then don't import.
// import {user} from “./utilities.js”

import { useState } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

// we want to fetch projects from db WHEN a button is clicked

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [projects, setProjects] = useState([])

  const fetchProjects = () => {
    // make our fetch request
    fetch("http://localhost:4000/projects")
      .then((resp) => resp.json())
      .then((projects) => setProjects(projects));
  };

  const onToggleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode) // false
  }

  return (
    <div className={isDarkMode ? "App" :"App light"}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode}/>
      <ProjectForm />
      <button onClick={fetchProjects}>Load Projects</button>
      <ProjectList projects={projects}/>
    </div>
  );
}

export default App;
