"use client";
import { translation } from "@/app/translation";
import { getWeatherIconURL, weatherEmoji } from "@/app/util";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

export default function DailyForecastCard({ data, lang }) {
  const [selected, setSelected] = useState(null);

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

  function handleSelected(idx) {
    if (selected === idx) {
      setSelected(null);
    } else {
      setSelected(idx);
    }
  }

  return (
    <div className="forecast-card">
      <p className="forecast-title">{translation.dailyForecast[lang]}</p>
      {forecasts.map((forecast, idx) => {
        const forecastData = extractForecastData(forecast);
        return (
          <div
            className="forecast-container hover:bg-blue-200 hover:cursor-pointer last:rounded-b-3xl"
            key={idx}
            onClick={() => handleSelected(idx)}
          >
            <div className="forecast-content">
              <div className="flex gap-4 xl:gap-8 items-center">
                <ExpandMoreIcon />
                <img
                  className="size-12 sm:size-16"
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
                  {String.fromCodePoint(weatherEmoji.temperature)}
                  {space}
                  {forecastData.minTemp} - {forecastData.maxTemp}°C
                </p>
                <p>
                  {String.fromCodePoint(weatherEmoji.humidity)}
                  {space}
                  {forecastData.minRH} - {forecastData.maxRH}%
                </p>
              </div>
            </div>
            {selected === idx ? (
              <p className="text-center px-2 pt-1">{forecastData.summary}</p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
