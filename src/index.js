import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search";
import "./App.css";
import "./Weather.css";

function App() {
  return (
    <div className="App">
      <div className="weather">
        <Search />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
