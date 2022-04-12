1. Fix App.js to render projects upon page load 
- implement a useEffect(react hook): 
    - useEffect will invoke when the component mounts 
    - when will useEffect run 1 time when the component renders vs multiple times upon updates
        - dependency array: if we leave this array empty, useEffect will run 1 time. If we provide elements to this array, which is state, that means that useEffect will run whenever that dependent changes 

// we have two forms: projecteditform and project form
// we have some state projectId, that will get updated when the edit button of a project is clicked
// This will cause the edit form to render

// Problem: edit form was not updating with clicked projects values:
// Solution: add projectId as a dependency in the useEffect inside of ProjectEditForm component. Why? This will cause this hook to rerun every time that dependency is changed


// We need to fix the edit form so that it works on submission

// handleSubmit function that we need to complete:

1. need to make a fetch request, PATCH, and provide the formState as the body


--------------------------------------------------------------------

Implementing an edit feature 

1. Edit form component => We created ProjectEditForm

2. ProjectEditForm
    1. receive the id of the item being edited as projectId as prop
        - With this id we are making a GET request to get the project from the server and then updating the formState that is currently empty string values with the project values and this populates the edit form with the projects details
    2. Receives an event handler from the parent component, App, called onUpdateProject
        - this function is going to  be used when the edit form is submitted and the response is received from the backend 

3. We need to determine which form will be rendered inside of the App component:
    1. We are going to initialize some state called projectId as null. This is going to indicate which form is rendered: new project or edit project form
    2. the way that we determine is through that function renderForm() that checks the value of projectId and if it exists, then renders the edit form else just renders the new form

4. How do we update projectId when we want to edit?

    1. we send enterProjectEditModeFor() to projectList which is then going to pass to ProjectListItem component to attach to the edit button associated with each of the projects
    2. HandleEditClick is attached to the edit button through onClick, when this happens, we invoke enterProjectEditModeFor() and pass the project id as an argument which then updates the state inside of the App component with the new ID. This update will indicate that a new render needs to happen which will render the edit form since projectId is now not null

5. How do we also update the DOM after updating the server? 

    1. onUpdateProject needs to update the state, projects
    2. We are going to map over projects and check to see which project matches the updated project through the id property. We need to return the updatedProj if true which will create a new array with the updated item and the old item thrown away 
    3. Then we update the state with this new collection



Implement a Delete functionality:

- On each projectlistitem, there is a delete button
- the delete button has an onClick event attached to it, that will invoke handleDeleteClick()
- When the button is clicked: we have 2 things to complete:

1. Update the backend:
    - We need to send a DELETE request using fetch


2. Update the front end 
    - we need to update the state: projects inside of App component 
    - We create a function onDeleteProject inside of App that will receive the deletedProj as an argument 
    - We pass onDeleteProject as a prop to ProjectList, and then ProjectList will pass it as a prop to ProjectListItem
    - Inside of ProjectListItem, inside of the handleClickDelete() we are going to pass the project prop to onDeleteProject function
    - Inside of App component, in the onDeleteProject(), filter over the projects state and include the project that does not match the deleted project by writing a condition like: project.id !== deletedProj.id
    - Update the state with the new filtered array