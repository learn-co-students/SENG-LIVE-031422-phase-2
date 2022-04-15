# React Router 


# Figuring what routes are going to be included in the project

1. To review the components that your application currently consists of and think about which of these components you need a route for:
2. What are the URLs for these components going to look like? 
- There is a standard called RESTful routing, and this should be follow to help alleviate stress of deciding URLs

Home: (root route) '/'
ProjectForm: '/projects/new'
ProjectEditForm: (dymanic routes) '/projects/:id/edit'
ProjectDetail: (dynamic routes) '/projects/:id'
ProjectList: '/projects'

Primary React Components that we are going to typically use in any Routing configurations:

BrowserRoute as Router
    - Where we use this is inside of the index.js 

Switch 
    - typically going to live inside the App.js file and it is going to wrap any components that are apart of the routing
    - Things like navbars and headers, we need to keep out of the switch 

Route 
    - what determines the URL that we have available to our application and what component is going to render upon that URL
    - its going to wrap each component individually 
    - We need to provide the `path` prop and this is where we define the route that needs to be matched for this component to render

Link 
    - behaves like an anchor tag, except it does not cause a reload. 
    - Need to provide the `to` prop which directs this link to a particular URL 

NavLink 
    - Behaves just like Link with one difference we can provide an active classname which then allows us to display the selected link with some styling 


### Wiring up our app with Routing 

1. Start at index.js 
    - import {BrowserRouter as Router} from 'react-router-dom'
    - Then wrap App component within the Router component

2. Add Switch to App.js 
    - Import Switch 
    - Wrap the components we want conditionally rendered with the Switch component

3. Then we need to wrap each individual component inside of the switch statement with the Route component and provide the path prop 
    - NOTE: any root route needs the exact prop to avoid constant mismatching

### After configuring in routing, add navigation across the app:

4. Use the Link/NavLink component to avoid any reloading of the page. So if you have any anchor tags <a>, replace with either one of these components
    - NOTE: if Link is not working, check index.js to ensure you are using ReactDOM.render()
    - If using NavLink to activate and style active links, make sure to include the exact prop 


### How to navigate through an edit feature

1. Need an edit button, that edit button should redirect to the edit form when clicked(do not need an event for this, links are clickable already)
2. Need to handle the dynamic part of our edit URL (:id)
3. Need to populate the Edit form with the accurate information pertaining to the resource we are editing 
    - custom hooks: useParams() is going to return a key value pair of the param in our URL if we have :id inside of the URL that is going to return as {id: 1}
    - import { useParams } from 'react-router-dom'
    - destructure the return value of useParams like so:
    const { id } = useParams()
    - and then we use the id anywhere we are using that dynamic URL
4. Implement a redirection for after the edit form is submitted
    - custom hook: useHistory(), the .push method to force a redirection 
    - that is going to look is first we are going to store teh return of the useHistory(): `const history = useHistory()`
    - `history.push(URL)`