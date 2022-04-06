import React from "react";
import { useState } from "react";

function Header() {
  // check and see if the app is in dark mode
  // if it is, then the button should say light mode

  // we are going to use array destructuring to create variables with the values of the 2 elements produced by useState
  const [isDarkMode, setIsDarkMode] = useState(true)

  // setter function is asynchronous
  const handleClick = () => {
    // we need to toggle the button to the opposite of itself
    setIsDarkMode(!isDarkMode)
    // do something with the state: we are working with our previous state not the current state
  };
  
  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={handleClick}>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</button>
    </header>
  );
}

export default Header;

// inside of the button I need to determine if Dark mode or Light mode is going to be rendered 