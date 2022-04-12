import { useState, useEffect } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import ProjectEditForm from "./components/ProjectEditForm";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [projects, setProjects] = useState([]);
  const [projectId, setProjectId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/projects")
      .then((resp) => resp.json())
      .then((projects) => setProjects(projects));
  }, []);

  const onToggleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  };

  const onAddProject = (newProj) => {
    setProjects((projects) => [...projects, newProj]);
  };

  const completeEditing = () => {
    setProjectId(null); // finished editing
  };

  const enterProjectEditModeFor = (projectId) => {
    setProjectId(projectId);
  };

  const onUpdateProject = (updatedProj) => {
    const updatedProjects = projects.map(ogProject => {
      if (ogProject.id === updatedProj.id){
        return updatedProj
      }
      else {
        return ogProject
      }
    })
    setProjects(updatedProjects)
    completeEditing()
  }

  const onDeleteProject = (deletedProj) => {
    // How am i going to update the projects state to exclude this deletedProj

    const updatedProjects = projects.filter(project => project.id !== deletedProj.id)
    setProjects(updatedProjects)
  }

  const renderForm = () => {
    if (projectId) {
      return (
        <ProjectEditForm
          projectId={projectId}
          onUpdateProject={onUpdateProject}
        />
      );
    } else {
      return <ProjectForm onAddProject={onAddProject} />;
    }
  };

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      {renderForm()}
      <ProjectList
        projects={projects}
        enterProjectEditModeFor={enterProjectEditModeFor}
        onDeleteProject={onDeleteProject}
      />
    </div>
  );
};

export default App;
