import { useState } from "react";
import WeatherDetails from "./WeatherDetails";

const GetWeather = () => {
  const [city, setCity] = useState("");
  const [weatherDetails, setWeatherDetails] = useState("");
  const [error, setError] = useState(null);

  const apiKey = "8e07810dc6743ea3994df51b510a2aa9";

  const clickHandler = async (event) => {
    event.preventDefault();
    try {
      const fetchWeatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );

      const fetchWeatherResponseData = await fetchWeatherResponse.json();
      if (!fetchWeatherResponse.ok) setError(fetchWeatherResponseData.message);
      if (fetchWeatherResponse.ok) setError(null);
      console.log(fetchWeatherResponseData);
      setWeatherDetails(fetchWeatherResponseData);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };

  return (
    <>
      <form className="flex flex-col h-[30vh] justify-center items-center gap-2">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(event) => setCity(event.target.value)}
          className="p-1 rounded-sm  w-[60%] outline-none"
        />
        <button
          onClick={clickHandler}
          className="text-white bg-emerald-600  w-[30%] p-1 rounded-[5rem] cursor-pointer active:scale-95 ">
          Get Weather
        </button>
      </form>

      {error ? (
        <p className="text-center text-rose-600 capitalize">{error}!</p>
      ) : (
        <WeatherDetails
          weatherDetails={weatherDetails}
          error={error}
        />
      )}
    </>
  );
};

export default GetWeather;
