import React from "react";

export default function WeatherForecastDay(props) {
  let icon = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    return days[day];
  }
  return (
    <div>
      <div className="ForecastDay">{day()}</div>
      <img
        className="ForecastIcon"
        src={icon}
        id="weather-icon"
        alt={props.data.weather[0].description}
        width="70"
      ></img>
      <div className="ForecastTemp">
        <span className="ForecastMax">{Math.round(props.data.temp.max)}˚</span>{" "}
        <span className="ForecastMin">{Math.round(props.data.temp.min)}˚</span>
      </div>
    </div>
  );
}
