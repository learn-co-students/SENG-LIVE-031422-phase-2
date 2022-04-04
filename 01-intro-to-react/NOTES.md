What is declarative vs imperative syntax?

- imperative describes step by step process to a result.
declarative is describing what you want

- declarative is describing what you want, allow the program to determine the end result

JSX:

- JavaScript XML: it allows us to write XML/HTML in JS 
- JSX is going to produce something called a react element

- Anything that is not a html element like value needs to be wrapped in {}
- If you are trying to mix the following into some JSX:

1. A variable
2. A function 
3. an object

React Elements: 

- Every component is going to produce a react element and be responsible for maintaining that particular react element 
- Components are composed of react elements put together to produce a single part of our UI


ReactDOM.render()

- select a single part of the DOM that we are going to inject our React elements into 
- is only going to be called one time
- There is going to be a top level component that is responsible for maintaining the rest of the components that make up the react application. Typically, this is called the App component
- performing some DOM manipulation
- Is going to take in 2 arguments: the react element, the HTML element that we are injecting the React element into

Props:

- Some data/methods(functions) that we are making available to a component 
- A prop is an object with key/value pairs inside 

```js
<Header title="Let's Learn React" subtitle="Components" />
```

{title: "Lets Learn React", subtitle: "Components"}

Creating a React Application

- `npx create-react-app <app_name>`


Files and folders created after generating a react app:

index.html: this is where we are going to inject our react application inside of the div with id 'root'


src folder:

- where our react application lives: any react components will be created inside of this folder