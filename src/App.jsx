import { useState } from "react";
import Inp from "./inp";
let count = 0;
function App() {
  function darkMode(e) {
    count++;
    if (count == 1) {
      e.target.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add(
        "dark"
      );
      e.target.setAttribute("src", "light.svg");
      e.target.parentElement.parentElement.parentElement.firstChild.setAttribute(
        "src",
        "bg-dark.jpg"
      );
    } else {
      e.target.parentElement.parentElement.parentElement.parentElement.parentElement.classList.remove(
        "dark"
      );
      e.target.setAttribute("src", "dark.svg");
      e.target.parentElement.parentElement.parentElement.firstChild.setAttribute(
        "src",
        "bg-light.jpg"
      );
    }
    if (count == 2) {
      count = count - 2;
    }
  }
  return (
    <>
      <img className="bg-img" src="light_bg.png" alt="" />
      <div className="container">
        <div className="nav">
          <h4 className="logo">TODO</h4>
          <img onClick={darkMode} src="light.svg" alt="" />
        </div>
        <Inp />
        <h6 className="footer">Drag and drop to reorder list</h6>
      </div>
    </>
  );
}

export default App;
