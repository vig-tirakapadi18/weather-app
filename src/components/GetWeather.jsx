import { Fragment } from "react";
import { useState } from "react";
import WeatherDetails from "./WeatherDetails";

const GetWeather = () => {
  const [city, setCity] = useState("");
  const [weatherDetails, setWeatherDetails] = useState("");

  const apiKey = "8e07810dc6743ea3994df51b510a2aa9";

  const clickHandler = async (event) => {
    event.preventDefault();
    const fetchWeatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const fetchWeatherResponseData = await fetchWeatherResponse.json();
    setWeatherDetails(fetchWeatherResponseData);
  };

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
        <button onClick={clickHandler}>Get Weather</button>
      </form>

      <WeatherDetails weatherDetails={weatherDetails} />
    </>
  );
};

export default GetWeather;
