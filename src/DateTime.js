import React from "react";

export default function DateTime(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let mins = props.date.getMinutes();
  if (mins < 10) {
    mins = `0${mins}`;
  }
  return (
    <div>
      {day} {hours}:{mins}
    </div>
  );
}
