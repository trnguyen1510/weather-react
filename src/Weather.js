import React from "react";
import "./Weather.css";
import Search from "./Search";

export default function Weather() {
    let weatherData = {
        city: "San Diego",
        temp: "19",
        humidity: "10",
        precipitation: "1",
        wind: "5",
        weatherIcon:
            "https://cdn2.iconfinder.com/data/icons/weather-icons-8/512/sunny-512.png"
    };
    return (
        <div className="weather">
            <Search />

            <div className="row">
                <div className="col-6">
                    <div className="clearfix weather-temp">
                        <img
                            src={weatherData.weatherIcon}
                            alt=""
                            className="icon-weather float-left"
                        />
                        <div className="float-left">
                            <span className="temperature">{weatherData.temp}</span>
                            <span className="change-temp">
                                <a href="/">°C</a>|
                <a href="/" className="active">
                                    °F
                </a>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="col-6">
                    <ul>
                        <li>Precipitation:{weatherData.precipitation}%</li>
                        <li>Humidity: {weatherData.humidity}%</li>
                        <li>Wind: {weatherData.wind} km/h</li>
                    </ul>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button
                            type="button"
                            className="form-control btn btn-currentlocation"
                        >
                            Temperature
            </button>
                        <button
                            type="button"
                            className="form-control btn btn-currentlocation"
                        >
                            Precipitation
            </button>
                        <button
                            type="button"
                            className="form-control btn btn-currentlocation"
                        >
                            Wind
            </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
