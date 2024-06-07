"use client";

import DailyForecastCard from "@/components/DailyForecastCard";
import HourlyForecastCard from "@/components/HourlyForecastCard";
import HumidityCard from "@/components/HumidityCard";
import LoadingPanel from "@/components/LoadingPanel";
import MoonCard from "@/components/MoonCard";
import PressureCard from "@/components/PressureCard";
import RainCard from "@/components/RainCard";
import SunCard from "@/components/SunCard";
import TemperatureCard from "@/components/TemperatureCard";
import UVCard from "@/components/UVCard";
import VisibilityCard from "@/components/VisibilityCard";
import WeatherCard from "@/components/WeatherCard";
import WindCard from "@/components/WindCard";
import { useEffect, useState } from "react";

export default function Home() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [nineDaysWeather, setNineDaysWeather] = useState(null);
  const [moonData, setMoonData] = useState(null);
  const [sunData, setSunData] = useState(null);
  const [meteoData, setMeteoData] = useState(null);

  const datas = [currentWeather, nineDaysWeather, moonData, sunData, meteoData];
  const apis = [
    { dataType: "rhrread", setter: setCurrentWeather },
    { dataType: "fnd", setter: setNineDaysWeather },
    { dataType: "MRS", setter: setMoonData },
    { dataType: "SRS", setter: setSunData },
    { dataType: "meteo", setter: setMeteoData },
  ];

  function getAPIUrl(dataType, lang = "en") {
    if (dataType === "meteo") {
      const meteoBaseUrl =
        "https://api.open-meteo.com/v1/forecast?latitude=22.2783&longitude=114.1747";
      const currentParams =
        "temperature_2m,relative_humidity_2m,dewpoint_2m,apparent_temperature,is_day,precipitation,precipitation_probability,weather_code,cloud_cover,pressure_msl,wind_speed_10m,wind_direction_10m,wind_gusts_10m,uv_index";
      const hourlyParams =
        "temperature_2m,relative_humidity_2m,rain,weather_code,uv_index,visibility";
      const dailyParams = "temperature_2m_max,temperature_2m_min";
      return `${meteoBaseUrl}&current=${currentParams}&hourly=${hourlyParams}&daily=${dailyParams}&timezone=auto&forecast_days=2`;
    }

    const today = new Date();
    const [day, month, year] = [
      today.getDate(),
      today.getMonth() + 1,
      today.getFullYear(),
    ];

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

  /* Fetch from every api, and set the json data to respective objects */
  useEffect(() => {
    async function getWeatherData() {
      apis.forEach(async (api) => {
        let url = getAPIUrl(api.dataType);
        let res = await fetch(url);
        let data = await res.json();
        api.setter(data);
      });
    }

    getWeatherData();
  }, []);

  /* If any data is null, render the loading panel */
  if (datas.some((item) => item == null)) {
    return <LoadingPanel />;
  }

  return (
    <div className="weather-page">
      <WeatherCard data={currentWeather} />
      <TemperatureCard data={meteoData} />
      <HumidityCard data={meteoData} />
      <RainCard data={meteoData} />
      <WindCard data={meteoData} />
      <UVCard data={meteoData} />
      <PressureCard data={meteoData} />
      <VisibilityCard data={meteoData} />
      <MoonCard data={moonData} />
      <SunCard data={sunData} />
      <DailyForecastCard data={nineDaysWeather} />
      <HourlyForecastCard data={meteoData} />
    </div>
  );
}
