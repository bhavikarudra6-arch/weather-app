import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ForecastCard from "./components/ForecastCard";
import "./App.css";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const API_KEY = "f6cc97cddac930adcd121a638f608d41"; 

  const fetchWeatherData = async (cityName) => {
    try {
      setError("");
      setLoading(true);
      setCity(cityName);

      const weatherRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );

      setWeather(weatherRes.data);

      const forecastRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`
      );

      const filtered = forecastRes.data.list.filter((item) =>
        item.dt_txt.includes("12:00:00")
      );

      setForecast(filtered);
    } catch (err) {
      setError("City not found. Please try again!");
      setWeather(null);
      setForecast([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1 className="title">🌤️ Weather App</h1>
      <SearchBar onSearch={fetchWeatherData} />

      {loading && <p>Fetching weather data...</p>}
      {error && <p className="error">{error}</p>}

      {weather && !loading && <WeatherCard data={weather} city={city} />}
      {forecast.length > 0 && !loading && <ForecastCard data={forecast} />}
    </div>
  );
};

export default App;
