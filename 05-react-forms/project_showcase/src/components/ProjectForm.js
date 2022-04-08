// we need to make this a controlled form:

// First step: add state: import useState
// Second step: is adding a name attribute to form inputs to reflect the key inside of our state object
// Third step: attach an onChange event to each form field, and define an event handler to handle that onChange
// Fourth step: inside of event handler for the onChange, update state

// Now what do we do with the form data? Submit it!!!
// First step: attach an event lister, onSubmit to the form
// Second: create and event handler, prevent the default behavior

import { useState } from "react";

const ProjectForm = ({onAddProject}) => {
  const [formData, setFormData] = useState({
    name: "",
    about: "",
    phase: "",
    link: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    };

    // I want to persist formData
    fetch("http://localhost:4000/projects", configObj)
    .then(resp => resp.json())
    .then(project => {
      // i need to use project to update the projects state in App component
      // How???
      // cb function 
      onAddProject(project)
      setFormData({
        name: "",
        about: "",
        phase: "",
        link: "",
        image: "",
      })
    })
  };

  return (
    <section>
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <h3>Add New Project</h3>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />

        <label htmlFor="about">About</label>
        <textarea
          id="about"
          name="about"
          onChange={handleChange}
          value={formData.about}
        />

        <label htmlFor="phase">Phase</label>
        <select
          name="phase"
          id="phase"
          onChange={handleChange}
          value={formData.phase}
        >
          <option value="">Pick a Phase</option>
          <option value="1">Phase 1</option>
          <option value="2">Phase 2</option>
          <option value="3">Phase 3</option>
          <option value="4">Phase 4</option>
          <option value="5">Phase 5</option>
        </select>

        <label htmlFor="link">Project Homepage</label>
        <input
          type="text"
          id="link"
          name="link"
          onChange={handleChange}
          value={formData.link}
        />

        <label htmlFor="image">Screenshot</label>
        <input
          type="text"
          id="image"
          name="image"
          onChange={handleChange}
          value={formData.image}
        />

        <button type="submit">Add Project</button>
      </form>
    </section>
  );
};

export default ProjectForm;
