"use client";

import LoadingPanel from "@/components/LoadingPanel";
import WeatherSummary from "@/components/WeatherSummary";
import { useEffect, useState } from "react";

export default function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [nineDaysWeather, setNineDaysWeather] = useState(null);

  function getAPIUrl(dataType, lang = "en") {
    const baseURL =
      "https://data.weather.gov.hk/weatherAPI/opendata/weather.php";
    return `${baseURL}?dataType=${dataType}&lang=${lang}`;
  }

  function getCurrentWeather() {
    /* Define HKO API URL */
    const apiURL = getAPIUrl("rhrread");

    fetch(apiURL).then((res) =>
      res.json().then((data) => {
        const temperature = data.temperature.data[2].value;
        const humidity = data.humidity.data[0].value;
        const rainfall = data.rainfall.data[7].max;
        const uv = data.uvindex.data[0].value;
        const weatherData = {
          humidity: `${humidity}%`,
          temperature: `${temperature}°C`,
          rainfall: `${rainfall}mm`,
          uv: uv
        };
        console.log(weatherData);
        setWeatherData(weatherData);
      }),
    );
  }

  function getNineDaysWeather() {
    const apiURL = getAPIUrl("fnd");

    fetch(apiURL).then((res) =>
      res.json().then((data) => {
        const weatherData = data.weatherForecast;
        console.log(weatherData);
        setNineDaysWeather(weatherData);
      }),
    );
  }

  function formatDailyForecast(forecast) {
    const month = forecast.forecastDate.substr(4, 2);
    /* const month = 3 */
    const day = forecast.forecastDate.substr(6, 2);
    const minTemp = forecast.forecastMintemp.value;
    const maxTemp = forecast.forecastMaxtemp.value;
    return `${day}/${month} ${minTemp}C - ${maxTemp}C`;
  }

  useEffect(() => {
    getCurrentWeather();
    getNineDaysWeather();
  }, []);

  if (!weatherData || !nineDaysWeather) {
    return <LoadingPanel />;
  }

  return (
    <div className="bg-blue-50 h-screen">
      <WeatherSummary weatherData={weatherData}/>
      <div className="bg-blue-200 flex flex-col items-center text-2xl m-4">
        <h1>9 Days forecast</h1>
        {nineDaysWeather.map((forecast, idx) => (
          <p key={idx}>{formatDailyForecast(forecast)}</p>
        ))}
      </div>
    </div>
  );
}
