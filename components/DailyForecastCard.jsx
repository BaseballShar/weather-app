import { getWeatherIconURL, weatherEmoji } from "@/app/util";

export default function DailyForecastCard({ data }) {
  const forecasts = data.weatherForecast;
  const space = " ";

  function extractForecastData(forecast) {
    const forecastData = {
      month: forecast.forecastDate.substr(4, 2),
      day: forecast.forecastDate.substr(6, 2),
      minTemp: forecast.forecastMintemp.value,
      maxTemp: forecast.forecastMaxtemp.value,
      minRH: forecast.forecastMinrh.value,
      maxRH: forecast.forecastMaxrh.value,
      iconId: forecast.ForecastIcon,
      dayOfWeek: forecast.week.substr(0, 3),
      summary: forecast.forecastWeather,
    };

    return forecastData;
  }

  return (
    <div className="forecast-card">
      <h1 className="text-center">9 Days forecast</h1>
      {forecasts.map((forecast, idx) => {
        const forecastData = extractForecastData(forecast);
        return (
          <div
            className="flex justify-around items-center border-t border-black py-2"
            key={idx}
          >
            <div className="flex gap-8">
              <img
                className="w-16"
                src={getWeatherIconURL(forecastData.iconId)}
                alt="Forecast icon"
              />
              <div>
                <p>
                  {forecastData.day}/{forecastData.month}
                </p>
                <p>({forecastData.dayOfWeek})</p>
              </div>
            </div>
            <div>
              <p>
                {String.fromCodePoint(weatherEmoji.temperature)}{space}
                {forecastData.minTemp} - {forecastData.maxTemp}°C
              </p>
              <p>
                {String.fromCodePoint(weatherEmoji.humidity)}{space}
                {forecastData.minRH} - {forecastData.maxRH}%
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
