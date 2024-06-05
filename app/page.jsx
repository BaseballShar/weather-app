"use client";

import ForecastList from "@/components/ForecastList";
import LoadingPanel from "@/components/LoadingPanel";
import MoonCard from "@/components/MoonCard";
import SunCard from "@/components/SunCard";
import WeatherCard from "@/components/WeatherCard";
import { useEffect, useState } from "react";

export default function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [nineDaysWeather, setNineDaysWeather] = useState(null);
  const [moonData, setMoonData] = useState(null)
  const [sunData, setSunData] = useState(null)

  function getAPIUrl(dataType, lang = "en") {
    const today = new Date()
    const [day, month, year] = [today.getDate(), today.getMonth() + 1, today.getFullYear()]

    const filename = {
      rhrread: "weather",
      fnd: "weather",
      MRS: "opendata",
      SRS: "opendata",
    };

    const extension = {
      rhrread: "",
      fnd: "",
      MRS: `&rformat=json&year=${year}&month=${month}&day=${day}`,
      SRS: `&rformat=json&year=${year}&month=${month}&day=${day}`,
    };

    const baseURL = "https://data.weather.gov.hk/weatherAPI/opendata";

    return `${baseURL}/${filename[dataType]}.php?dataType=${dataType}&lang=${lang}${extension[dataType]}`;
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

      url = getAPIUrl("MRS");
      res = await fetch(url);
      data = await res.json();
      setMoonData(data)

      url = getAPIUrl("SRS");
      res = await fetch(url);
      data = await res.json();
      setSunData(data)
    }

    getWeatherData();
  }, []);

  if (!weatherData || !nineDaysWeather || !moonData || !sunData) {
    return <LoadingPanel />;
  }

  return (
    <div className="weather-page">
      <WeatherCard weatherData={weatherData} />
      <MoonCard data={moonData}/>
      <SunCard data={sunData}/>
      <ForecastList data={nineDaysWeather} />
    </div>
  );
}
