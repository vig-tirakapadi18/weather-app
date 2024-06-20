import { useEffect, useState } from "react";
import WeatherDetails from "./WeatherDetails";
import Loader from "../UI/Loader";

const GetWeather = () => {
  const [city, setCity] = useState("");
  const [weatherDetails, setWeatherDetails] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDataTimeout = setTimeout(async () => {
      try {
        setLoading(true);
        const fetchWeatherResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        const fetchWeatherResponseData = await fetchWeatherResponse.json();
        if (!fetchWeatherResponse.ok)
          setError(fetchWeatherResponseData.message);

        if (fetchWeatherResponse.ok) {
          setError(null);
          setLoading(false);
        }
        setWeatherDetails(fetchWeatherResponseData);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(fetchDataTimeout);
  }, [city]);

  const apiKey = "8e07810dc6743ea3994df51b510a2aa9";

  // const fetchWeatherHandler = async (event) => {
  //   // event.preventDefault();
  //   setCity(event.target.value);
  //   setTimeout(async () => {
  //     try {
  //       setLoading(true);
  //       const fetchWeatherResponse = await fetch(
  //         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  //       );

  //       const fetchWeatherResponseData = await fetchWeatherResponse.json();
  //       if (!fetchWeatherResponse.ok)
  //         setError(fetchWeatherResponseData.message);

  //       if (fetchWeatherResponse.ok) {
  //         setError(null);
  //         setLoading(false);
  //       }
  //       setWeatherDetails(fetchWeatherResponseData);
  //     } catch (error) {
  //       setError(error.message);
  //       setLoading(false);
  //     }
  //   }, 5000);
  // };

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
        {/* <button
          onClick={clickHandler}
          className="text-white bg-emerald-600  w-[30%] p-1 rounded-[5rem] cursor-pointer active:scale-95 ">
          Get Weather
        </button> */}
      </form>

      {!error && loading && <Loader />}

      {error ? (
        <p className="text-center bg-rose-500 capitalize w-[50%] mx-auto p-4 text-white text-2xl rounded-md">
          ❌ {error}!
        </p>
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
