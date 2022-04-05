// i need to pass each project in projects to projectlistitem


// first import your component
import ProjectListItem from "./ProjectListItem";

function ProjectList({ projects }) {
  
  return (
  <div>
    {projects.map(project => <ProjectListItem project={project} />)}
  </div>
  );
}

export default ProjectList;
