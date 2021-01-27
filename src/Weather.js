import React from "react";
import axios from "axios";

export default function Weather (props) {

    function handleResponse(response) {
        alert(`The weather in ${response.data.name} is ${response.data.main.temp}°C`)
    }
    let apiKey = "d80253f7bab7ebfb0d574948c8b564be";
    let apiURL = `http://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get(apiURL).then(handleResponse);
    return (
        <h2>Hello from Weather</h2>
    )
}