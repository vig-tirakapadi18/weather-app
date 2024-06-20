const WeatherDetails = ({ weatherDetails }) => {
  // const iconUrl = `http://openweathermap.org/img/w/${weatherDetails.weather[0].icon}.png`;

  return (
    <>
      {weatherDetails.name && (
        <div className="mx-[20%] bg-stone-400 p-4 rounded-lg text-center">
          <h2 className="uppercase font-bold text-2xl">
            {weatherDetails.name}
          </h2>
          <h1 className="text-5xl text-center font-bold">
            {weatherDetails.main.temp} <span className="text-3xl">°C</span>
          </h1>
          <img
            src={`http://openweathermap.org/img/w/${weatherDetails.weather[0].icon}.png`}
            alt="weather icon"
            className="w-20 mx-auto"
          />
          <h3 className="uppercase font-semibold">
            {weatherDetails.weather[0].description}
          </h3>
          <p>
            Wind Speed:{" "}
            <span className="text-2xl font-semibold">
              {weatherDetails.wind.speed} m/s
            </span>
          </p>
        </div>
      )}
    </>
  );
};

export default WeatherDetails;
