import React from "react";
import DateTime from "./DateTime.js";

export default function WeatherInfo(props) {
  return (
    <div className="row center">
      <div className="col-6">
        <img
          src={props.data.icon}
          id="weather-icon"
          alt={props.data.description}
        ></img>
        <h4 className="temp">
          {Math.round(props.data.temperature)}
          <span className="metric">˚C</span>
        </h4>
        <h3 className="speed">Wind: {Math.round(props.data.wind)}km/h</h3>
      </div>
      <div className="col-6" id="weather-info">
        <h1 id="city-name" className="text-uppercase">
          {props.data.city}
        </h1>
        <h4 id="current-time">
          {" "}
          <DateTime date={props.data.time} />
        </h4>
        <h4 id="weather-desc" className="text-capitalize">
          {props.data.description}
        </h4>
      </div>
    </div>
  );
}
