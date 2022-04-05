Relative paths and how to determine what it looks like 

. => leave the file, go up one directory(typically the parent folder)

/file_name => means go into that file


Components: 

- a function that takes a prop and returns JSX, not every component needs or will have props
- a function that returns JSX, HAS TO RETURN JSX!!!!
- a block of code that can be reused 
- returns only one JSX per component
- a package 
- building blocks of a react application 


Component Concerns:
1. Component names MUST BE CAPITALIZED!!! 
2. Components must return ONE element, JSX

This error: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment

Means you need to wrap two elements inside of a parent element!!

Props: 

- A way for us to pass data from component to component 
- A way for us to make components dymanic and reusable
- Comes in as an object conventionally called props 
- Props are passed into a component upon rendering 

```js 
<Card greeting="hi" subGreeting="hello" />
```

this is going to translate into the props obj:

{
    greeting: "hi",
    subGreeting: "hello"
}


Brainstorming from wireframe:
- header
- NavBar
- form 
- cards for projects
- buttons
- project container


What we're build from brain storm:

- Header
- ProjectForm
- ProjectList
- ProjectListItem
- App

Component Hierarchy: 

App => Header, ProjectForm, ProjectList
ProjectList => ProjectListItem


Data Flow:

application is working with a list of projects to render on the web page 


which components need access to our list of projects:

- ProjectForm
- ProjectList

- ProjectListItem(this component needs each individual project)