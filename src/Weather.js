import React from "react";
import "./Weather.css";

export default function Weather() {
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
            src="http://openweathermap.org/img/wn/04d@2x.png"
            id="weather-icon"
            alt="Clouds"
          ></img>
          <h4 className="temp">
            <span id="display-temp"></span> 8˚C &
            <span id="display-speed"></span> 2km/h
          </h4>
        </div>
        <div className="col-6">
          <h1 id="city-name">Tokyo</h1>
          <h4 id="current-time">Sun 13:30</h4>
          <h4 id="weather-desc">Broken Clouds</h4>
        </div>
      </div>
    </div>
  );
}
