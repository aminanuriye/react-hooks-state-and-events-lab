// At the top
import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Item from "./Item";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const appClass = isDarkMode ? "App dark" : "App light";

  function handleDarkModeClick() {
    setIsDarkMode((prev) => !prev);
  }

  return (
    <div className={appClass}>
      <header>
        <h1>Grocery List</h1>
        <button onClick={handleDarkModeClick}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      {/* other components */}
      <ShoppingList/>
      <Item/>
    </div>
  );
}

export default App;
