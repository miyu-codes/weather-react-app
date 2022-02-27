import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.default * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div>
        <h1 className="temp">
          {Math.round(props.default)}{" "}
          <span className="unit">
            ˚C |
            <a href="/" onClick={convertFahrenheit}>
              ˚F
            </a>
          </span>
        </h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="temp">
          {Math.round(fahrenheit())}{" "}
          <span className="unit">
            <a href="/" onClick={convertCelsius}>
              ˚C
            </a>{" "}
            | ˚F
          </span>
        </h1>
      </div>
    );
  }
}
