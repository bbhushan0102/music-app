import React from "react";

function WeatherForcast({ weather }) {
  const weatherData = weather.data.list;

  return (
    <div>
      <h2>Today Temperature in your City</h2>
      {weatherData.map(data => {
        return (
          <span key={data.dt}>
            {Math.ceil(data.main.temp)}
            <br />{" "}
          </span>
        );
      })}
      <span />
    </div>
  );
}
export default WeatherForcast;