import axios from "axios";
import React, { useState } from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  //let [iconLink, setIconLink] = useState("");
  function displayTemp(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      time: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    const apiKey = "f07e9d422e3c34b4a8d4eff76c0c2e71";
    let apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiLink).then(displayTemp);
  }

  function changeWeather(event) {
    event.preventDefault();
    search();
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="display-weather">
        <form id="browse" className="top" onSubmit={changeWeather}>
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
                onChange={changeCity}
              />{" "}
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Fetching Data...";
  }
}
