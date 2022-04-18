### useRef hook 

1. What is this hook
    - allow us to access a DOM node the React way  (its a React selector method)


2. When do we want to use it 
    - DO NOT OVERUSE IT 
    - when we are trying to reference a DOM element 
    - When we want to retain some previous state 


3. How do we implement it?

1. import the useRef hook from react 
2. we are going to create a variable using the hook, when we are naming the variable, it is wise to name it similar to the node we expect to attach the reference to 
`const nameInputRef = useRef()` we will need to add a `ref` prop to the element we are trying to reference
3. This will produce an object {current: value} where the value is the Node that the ref was attached to 
4. To do something with the node, we would then say nameInputRef.current
5. useRef is going to be invoked between the render and the sideEffects lifecycles of our component



### Custom hook 

1. What is a Custom hook: 
    - this is a hook we define for our application 
    - makes it a lot for us to share logic 

2. Why do we want to use custom hooks: 
    - to abstract any repetitive logic 




### Context 

- prop drilling: is the process of passing props through components in a hiearchy down to the component that will actually use it 
- the problem that context resolves is by avoiding prop drilling 
- is we have some global data we can create a context wrapper around that bit of data and just access it directly inside of the components that need it

when we create a context, we get a provider and a consumer


1. Creating a context is a function that is going to use the createContext hook 
2. import createContext from react. Sometimes you'll see it as React.createContext
3. After the context is created, we want to wrap whatever component we want to give access to that data inside of the provider component
