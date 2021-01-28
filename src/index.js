import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./Weather.css";

function App() {
  return (
    <div className="App">
      <div className="weather">
        <Search />
      </div>
      <div className="footnote">
        <small>
          This project is coded by <a className="link" href="https://www.linkedin.com/in/tramnguyen1510/"> Tram Tracy Nguyen

        </a>
        and is <a className="link" href="https://github.com/trnguyen1510/weather-react"> open-sourced on GitHub
        </a>
        and 
        <a className="link" href="https://tracy-weather-reactapp.netlify.app"> hosted on Netlify
        </a>
        </small>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
