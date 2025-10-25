import React from "react";

const ForecastCard = ({ data }) => {
  return (
    <div className="forecast-container">
      <h3>5-Day Forecast</h3>
      <div className="forecast-list">
        {data.map((item, index) => (
          <div className="forecast-item" key={index}>
            <p>{new Date(item.dt_txt).toLocaleDateString("en-US", { weekday: "long" })}</p>
            <p>{Math.round(item.main.temp)}°C</p>
            <p>{item.weather[0].main}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastCard;