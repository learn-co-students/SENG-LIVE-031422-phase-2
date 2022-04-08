import { useState } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [projects, setProjects] = useState([]);

  const fetchProjects = () => {
    fetch("http://localhost:4000/projects")
      .then((resp) => resp.json())
      .then((projects) => setProjects(projects));
  };

  const onToggleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  };

  // create a function that will update the state of projects so that App still has control over this update and then send that function down to projectform

  const onAddProject = (newProj) => {
    // if we are adding a new project to projects collection, what should we pass to onAddProject
    setProjects(projects => [...projects, newProj]) 
  }

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      <ProjectForm onAddProject={onAddProject}/>
      <button onClick={fetchProjects}>Load Projects</button>
      <ProjectList projects={projects} />
    </div>
  );
};

export default App;
