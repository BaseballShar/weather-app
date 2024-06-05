"use client";

import ForecastList from "@/components/ForecastList";
import LoadingPanel from "@/components/LoadingPanel";
import WeatherCard from "@/components/WeatherCard";
import { useEffect, useState } from "react";

export default function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [nineDaysWeather, setNineDaysWeather] = useState(null);

  function getAPIUrl(dataType, lang = "en") {
    const baseURL =
      "https://data.weather.gov.hk/weatherAPI/opendata/weather.php";
    return `${baseURL}?dataType=${dataType}&lang=${lang}`;
  }

  useEffect(() => {
    async function getWeatherData() {
      let url = getAPIUrl("rhrread");
      let res = await fetch(url);
      let data = await res.json();
      setWeatherData(data);

      url = getAPIUrl("fnd");
      res = await fetch(url);
      data = await res.json();
      setNineDaysWeather(data);
    }

    getWeatherData();
  }, []);

  if (!weatherData || !nineDaysWeather) {
    return <LoadingPanel/>
  }

  return (
    <div className="bg-blue-50 grid grid-cols-3">
      <WeatherCard weatherData={weatherData} />
      <WeatherCard weatherData={weatherData} />
      <WeatherCard weatherData={weatherData} />
      <ForecastList data={nineDaysWeather}/>
    </div>
  );
}
