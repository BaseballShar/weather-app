import { getWeatherIconURL } from "@/app/util";

export default function ForecastList({ data }) {
  const forecasts = data.weatherForecast;

  function extractForecastData(forecast) {
    const month = forecast.forecastDate.substr(4, 2);
    const day = forecast.forecastDate.substr(6, 2);
    const minTemp = forecast.forecastMintemp.value;
    const maxTemp = forecast.forecastMaxtemp.value;
    const minRH = forecast.forecastMinrh.value;
    const maxRH = forecast.forecastMaxrh.value;
    const iconId = forecast.ForecastIcon;

    const forecastData = {
      month: month,
      day: day,
      minTemp: minTemp,
      maxTemp: maxTemp,
      minRH: minRH,
      maxRH: maxRH,
      iconId: iconId,
    };
    return forecastData;
  }

  return (
    <div className="bg-blue-200 flex flex-col text-2xl m-4 rounded-3xl">
      <h1 className="text-center">9 Days forecast</h1>
      {forecasts.map((forecast, idx) => {
        const forecastData = extractForecastData(forecast);
        return (
          <div
            className="flex justify-around items-center border-t border-black py-2"
            key={idx}
          >
            <div>
              <p>
                {forecastData.day}/{forecastData.month}
              </p>
              <img
                className="w-16"
                src={getWeatherIconURL(forecastData.iconId)}
                alt="Forecast icon"
              />
            </div>
            <div>
              <p>
                {forecastData.minTemp} - {forecastData.maxTemp}°C
              </p>
              <p>
                {forecastData.minRH} - {forecastData.maxRH}%
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
