import React from "react";

const WeatherCard = ({ data, city }) => {
  const { main, weather, wind } = data;

  return (
    <div className="weather-card">
      <h2>{city.toUpperCase()}</h2>
      <p className="temp">{Math.round(main.temp)}°C</p>
      <p className="condition">{weather[0].main}</p>

      <div className="details">
        <p>💧 Humidity: {main.humidity}%</p>
        <p>🌬 Wind: {wind.speed} km/h</p>
      </div>
    </div>
  );
};

export default WeatherCard;