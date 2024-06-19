const WeatherDetails = ({ weatherDetails, error }) => {
  return (
    <>
      {weatherDetails.name && (
        <div className="mx-[20%] bg-stone-300 p-4 rounded-lg text-center">
          <h2 className="uppercase font-bold text-2xl">
            {weatherDetails.name}
          </h2>
          <h1 className="text-5xl text-center font-bold">
            {weatherDetails.main.temp} <span className="text-3xl">°C</span>
          </h1>
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
      {/* : (
        <p className="text-rose-500 text-center">
          Please enter a valid City name!
        </p>
      ) */}
    </>
  );
};

export default WeatherDetails;
