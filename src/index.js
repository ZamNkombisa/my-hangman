import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//Render the App component inside the 'root' element in the HTML document
ReactDOM.render(
  //Wrapping the App component with React.StrictMode for additional development checks
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  //Find the HTML element with the id 'root' in the document
  document.getElementById("root")
);
