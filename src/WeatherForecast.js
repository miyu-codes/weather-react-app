import axios from "axios";
import React, { useState } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function displayForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div>
        <div className="row">
          <div className="col">
            <WeatherForecastDay data={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "f07e9d422e3c34b4a8d4eff76c0c2e71";
    let latitude = props.data.coordinates.lat;
    let longitude = props.data.coordinates.lon;
    let apiLink = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiLink).then(displayForecast);

    return null;
  }
}
