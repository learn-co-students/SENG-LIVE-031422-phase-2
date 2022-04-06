What is a stateless component?
- a component that doesnt change 
- static 
- a component that doesnt maintain or have its own state 
- we have built only stateless components. PROPS != STATE

Why is it important to understand state and events together?
- event that will trigger some state change, state change will cause React components to re-render 
- the flow: attach an event listener to some JSX when that event is triggered, going to update state which is going to cause the component to re-render with some DOM manipulation 

1. add an event listener(add them inline with the JSX)
2. Handle the event 
3. inside event handler, we're going to set state 

events that we are using: onClick, onChange

State:

What is state:
- Private data to a component 
- State is an object 
- State is the way that our components will know to re-render and perform some type of DOM manipulation 

How is state defined(initialize state inside of a component):

- import {useState} from 'react'
- useState: react hook 
- array destructuring 

Things to think about when defining state:

- should this even be state?


- Where state is accessible:

- only inside the component it has been defined within 
- everywhere else it can be sent as a prop, props are immutable( they can not be changed)


Toggle the button from 'dark mode' to 'light mode' 

1. We need to attach an event to the button
2. Button is defined inside of our Header component
3. Define an event handler for that event 
4. Create some state that determines what mode the button is currently in



We need to filter projects out in our ProjectList component based on the text our user inputs in the search field

1. we need to figure out if we need state what type of state do we need 
2. where should our event be attached to, what type of event should it be
- search box
- onChange event
3. how can i update the list of projects so that it renders just the list of matches per the input text 


When to use arrow function inside of our setter functions vs not 

we will use callback function inside of the setter function when we are using the current state IMMEDIATELY after it has been set, inside the same function 