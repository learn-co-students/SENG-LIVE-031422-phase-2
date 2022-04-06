import ProjectListItem from "./ProjectListItem";

function ProjectList({ projects }) {
  return (
    <div>
      {projects.map((project) => (
        <ProjectListItem project={project} />
      ))}
    </div>
  );
}

export default ProjectList;
