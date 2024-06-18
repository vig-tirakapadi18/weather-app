const WeatherDetails = ({ weatherDetails }) => {
  console.log(weatherDetails.weather[0].description);
  return (
    <>
      {weatherDetails && (
        <div className="weather-details">
          <h2>
            Weather Details of <span>{weatherDetails.name}</span>
          </h2>
          <h1>{weatherDetails.main.temp}</h1>
          <h3>{weatherDetails.weather[0].description}</h3>
          <p>Wind Speed: {weatherDetails.wind.speed}</p>
        </div>
      )}
    </>
  );
};

export default WeatherDetails;
