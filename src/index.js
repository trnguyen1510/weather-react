import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search";
import "./index.css";
import "./Weather.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="weather">
        <Search />
      </div>
      <div className="footnote">
        <small>
          This project is coded by <a href="https://www.linkedin.com/in/tramnguyen1510/">Tram Tracy Nguyen

        </a>
        and is
        <a href="https://github.com/trnguyen1510/weather-react">open-sourced on GitHub
        </a>
        and
        <a href="https://tracy-weather-reactapp.netlify.app">hosted on Netlify
        </a>
        </small>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
