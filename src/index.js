import React from "react";
import ReactDOM from "react-dom";

import Button from "./components/Button";

import "./styles.css";

function App() {
  /*
    1. Add a new fragment around the existing div in the return statements (spoilers: (<> </>))
    2. Create a new div
    3. Add the css class "highlighted" to the new div
    4. Add a button (you can make onClick={() => console.log("Button was clicked")})
    5. import a card and add content to it (spoilers: at the top - import Card from './components/Card')

    Bonus: Add a style to the card (can be anything, border / background, etc)

    Tips:
    Make sure you use `className` for class.
    
    For the bonus, remember that the style objects take two braces {{ backgroundColor: '#F00' }}
      Also keep in mind that the style properties are camelCase 
      with no dashes unlike their related CSS properties 
      (e.g. backgroundColor instead of background-color)
  */

  return <div>This is the original content</div>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
