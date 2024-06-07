import { getWeatherIconURL, weatherEmoji } from "@/app/util";
import moment from "moment";

export default function HourlyForecastCard({ data }) {
  const toHKOWeatherCode = {
    day: {
      0: 50, // Clear sky
      1: 51, // Mainly clear
      2: 52, // Partly cloudy
      3: 60, // Overcast
      45: 83, // Fog
      48: 83,
      51: 62, // Drizzle
      53: 62,
      55: 62,
      61: 62, // Slight rain
      63: 63, // Moderate rain
      65: 64, // Heavy rain
      80: 62, // Slight shower
      81: 63, // Moderate shower
      82: 64, // Heavy shower
      95: 65, // Thunderstorm
    },
    night: {
      0: 73, // Clear sky
      1: 77, // Mainly clear
      2: 76, // Partly cloudy
      3: 60, // Overcast
      45: 83, // Fog
      48: 83,
      51: 62, // Drizzle
      53: 62,
      55: 62,
      61: 62, // Slight rain
      63: 63, // Moderate rain
      65: 64, // Heavy rain
      80: 62, // Slight shower
      81: 63, // Moderate shower
      82: 64, // Heavy shower
      95: 65, // Thunderstorm
    },
  };

  /* Convertforcast data into an array of weather data objects */
  const hourlyForcasts = data.hourly.time.map((_, idx) => {
    const forcasts = {
      time: moment(data.hourly.time[idx]),
      timeDisplay: moment(data.hourly.time[idx]).format("h A"),
      temp: Math.round(data.hourly.temperature_2m[idx]),
      rh: data.hourly.relative_humidity_2m[idx],
      rain: data.hourly.rain[idx],
      uv: Math.round(data.hourly.uv_index[idx]),
      iconId: toHKOWeatherCode.day[parseInt(data.hourly.weather_code[idx])],
    };
    return forcasts;
  });

  /* const bihourlyForcasts = hourlyForcasts.filter((_, idx) => idx % 2 === 0); */
  const next12HoursForcasts = hourlyForcasts
    .filter((forcast) => forcast.time > moment())
    .slice(0, 12);

  return (
    <div className="forecast-card">
      <div className="flex flex-col">
        <p className="card-title">Hourly Forcast</p>
        {next12HoursForcasts.map((forcast, idx) => (
          <div
            key={idx}
            className="flex justify-around items-center border-t border-black py-1"
          >
            <div>
              <img
                className="w-12"
                src={getWeatherIconURL(forcast.iconId)}
                alt="weather icon"
              />
              <p>{forcast.timeDisplay}</p>
            </div>
            <div>
              <p>UV: {forcast.uv}</p>
              <p>
                {String.fromCodePoint(weatherEmoji.rain)} {forcast.rain}mm
              </p>
            </div>
            <div>
              <p>
                {String.fromCodePoint(weatherEmoji.temperature)} {forcast.temp}
                °C
              </p>
              <p>
                {String.fromCodePoint(weatherEmoji.humidity)} {forcast.rh}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
