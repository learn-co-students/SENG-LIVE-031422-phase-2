import React from "react";

// Header is now a stateless component:
function Header({ isDarkMode, onToggleDarkMode }) {
  // in the case that we wanted to do something else with the event, we would define an event handler like this, and invoke the cb function inside of here instead of inline with the onClick:
  // const handleClick = () => {
  //   onToggleDarkMode();
  // }
  
  const buttonTextContent = isDarkMode ? "Light Mode" : "Dark Mode";

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={onToggleDarkMode}>{buttonTextContent}</button>
    </header>
  );
}

export default Header;


// two options which is better and why:

// 1. pass the setter function to Header so we can set the state inside of Header component
// 2. define a function inside App that will update state, and pass that function into header to be invoked meaning header is not doing the setting of state