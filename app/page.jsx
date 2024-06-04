"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [weatherData, setWeatherData] = useState(null);

  function getCurrentWeather() {
    /* Define HKO API URL */
    const baseURL =
      "https://data.weather.gov.hk/weatherAPI/opendata/weather.php";
    const dataType = "rhrread";
    const lang = "en";
    const apiURL = `${baseURL}?dataType=${dataType}&lang=${lang}`;

    fetch(apiURL).then((res) =>
      res.json().then((data) => {
        const temperature = data.temperature.data[2].value;
        const humidity = data.humidity.data[0].value;
        const weatherData = {
          humidity: `${humidity}%`,
          temperature: `${temperature}C`,
        };
        console.log(weatherData);
        setWeatherData(weatherData);
      }),
    );
  }

  useEffect(() => getCurrentWeather(), []);

  return (
    <div className="bg-blue-50">
      <div className="bg-blue-100 flex justify-around">
        {weatherData !== null ? (
          <>
            <p>Temperature: {weatherData.temperature}</p>
            <p>Humidity: {weatherData.humidity}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="bg-blue-200 flex flex-col items-center">
        <p>11AM 21C</p>
        <p>12PM 22C</p>
        <p>1PM 24C</p>
        <p>2PM 19C</p>
        <p>3PM 18C</p>
      </div>
    </div>
  );
}
