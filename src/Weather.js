import axios from "axios";
import React, { useState } from "react";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function displayTemp(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      city: response.data.name,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      icon: "http://openweathermap.org/img/wn/04d@2x.png",
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="display-weather">
        <form id="browse" className="top">
          <div className="row">
            <div className="col-3">
              <input type="submit" value="🔍" className="btn icon" />{" "}
            </div>
            <div className="col-9">
              <input
                type="search"
                placeholder="Change city..."
                className="btn form-control"
                id="city-input"
                autoComplete="off"
              />{" "}
            </div>
          </div>
        </form>
        <div className="row center">
          <div className="col-6">
            <img
              src={weatherData.icon}
              id="weather-icon"
              alt={weatherData.description}
            ></img>
            <h4 className="temp">
              <span id="display-temp"></span>{" "}
              {Math.round(weatherData.temperature)}˚C &
              <span id="display-speed"></span> {Math.round(weatherData.wind)}
              km/h
            </h4>
          </div>
          <div className="col-6">
            <h1 id="city-name">{weatherData.city}</h1>
            <h4 id="current-time">Sun 13:30</h4>
            <h4 id="weather-desc">{weatherData.description}</h4>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "f07e9d422e3c34b4a8d4eff76c0c2e71";
    let city = "Tokyo";
    let apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiLink).then(displayTemp);

    return "Fetching Data...";
  }
}
