import React from "react";
import ReactDOM from "react-dom";

//we are using global attributes here like setting contentEditable = "true"
//allows us to edit the content
ReactDOM.render(
  <div>
    <h1 className="head" contentEditable="true" spellCheck="false">
      My fav food
    </h1>
    <ul>
      <li>1-Chicken</li>
      <li>2-Chicken</li>
      <li>3-Chicken</li>
    </ul>
  </div>,
  document.getElementById("root")
);
