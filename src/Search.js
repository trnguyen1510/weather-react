import React, { useState } from "react";
import axios from "axios";

export default function Search() {
    let overview = {
        currentUpdate: "Monday 8:00",
        weatherCondition: "Clear"
    };

    let [city, setCity] = useState("");
    let [weather, setWeather] = useState({});
    let [loaded, setLoaded] = useState(false);
    let [message, setMessage] = useState("");

    function displayWeather(response) {
        setLoaded(true);
        setWeather({
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            description: response.data.weather[0].description
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        let apiKey = "d80253f7bab7ebfb0d574948c8b564be";
        let units = "metric";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
        axios.get(apiUrl).then(displayWeather);
        setMessage(`${city}`);
    }

    function updateCity(event) {
        setCity(event.target.value);
    }

    let form = (
        <form className="search-form" onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-6">
                    <input
                        type="search"
                        placeholder="Search for a city..."
                        className="form-control shadow"
                        onChange={updateCity}
                    />
                </div>
                <div className="col-3">
                    <input
                        type="submit"
                        value="Search"
                        className="form-control btn btn-search shadow"
                    />
                </div>
                <div className="col-3 locationButton">
                    <input
                        type="submit"
                        value="Current Location"
                        className="form-control btn btn-currentlocation shadow"
                    />
                </div>
            </div>
        </form>
    );
    if (loaded) {
        return (
            <div>
                {form}
                <div className="overview">
                    <h1>{message}</h1>
                    <ul>
                        <li>Last updated: {overview.currentUpdate}</li>
                        <li>{weather.description}</li>
                    </ul>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="clearfix weather-temp">
                            <img
                                src={weather.icon}
                                alt=""
                                className="icon-weather float-left"
                            />
                            <div className="float-left">
                                <span className="temperature">
                                    {Math.round(weather.temperature)}
                                </span>
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
                            <li>Precipitation:{weather.precipitation}%</li>
                            <li>Humidity: {weather.humidity}%</li>
                            <li>Wind: {weather.wind} km/h</li>
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
    } else {
        return form;
    }
}
