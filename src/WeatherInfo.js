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
          <span id="display-temp"></span> {Math.round(props.data.temperature)}
          ˚C &<span id="display-speed"></span> {Math.round(props.data.wind)}
          km/h
        </h4>
      </div>
      <div className="col-6">
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
