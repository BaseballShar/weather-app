export default function NineDaysForcast({weatherData}) {
  function formatDailyForecast(forecast) {
    const month = forecast.forecastDate.substr(4, 2);
    const day = forecast.forecastDate.substr(6, 2);
    const minTemp = forecast.forecastMintemp.value;
    const maxTemp = forecast.forecastMaxtemp.value;
    return `${day}/${month} ${minTemp}C - ${maxTemp}C`;
  }

  return (
    <div className="bg-blue-200 flex flex-col items-center text-2xl m-4">
      <h1>9 Days forecast</h1>
      {weatherData.map((forecast, idx) => (
        <p key={idx}>{formatDailyForecast(forecast)}</p>
      ))}
    </div>
  )
}
