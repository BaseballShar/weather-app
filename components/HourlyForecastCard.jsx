import { translation } from "@/app/translation";
import { getWeatherIconURL, weatherEmoji } from "@/app/util";
import moment from "moment";
import "moment/locale/zh-HK";

export default function HourlyForecastCard({ data, lang }) {
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
      96: 65, // Thunderstorm with hail
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
      96: 65, // Thunderstorm with hail
    },
  };

  /* Convert forecast data into an array of weather data objects */
  const hourlyForecasts = data.hourly.time.map((_, idx) => {
    const forecasts = {
      time: moment(data.hourly.time[idx]),
      timeDisplay: moment(data.hourly.time[idx]).locale("en").format("h A"),
      chineseTimeDisplay: `${moment(data.hourly.time[idx])
        .locale("zh-HK")
        .format("Ah")}時`,
      temp: Math.round(data.hourly.temperature_2m[idx]),
      rh: data.hourly.relative_humidity_2m[idx],
      rain: data.hourly.rain[idx],
      uv: Math.round(data.hourly.uv_index[idx]),
      dayIconId: toHKOWeatherCode.day[parseInt(data.hourly.weather_code[idx])],
      nightIconId:
        toHKOWeatherCode.night[parseInt(data.hourly.weather_code[idx])],
      isDay: data.hourly.is_day[idx],
    };
    return forecasts;
  });

  /* const bihourlyForecasts = hourlyForecasts.filter((_, idx) => idx % 2 === 0); */
  const next12HoursForecasts = hourlyForecasts
    .filter((forecast) => forecast.time > moment())
    .slice(0, 12);

  return (
    <div className="forecast-card">
      <p className="forecast-title">{translation.hourlyForecast[lang]}</p>
      {next12HoursForecasts.map((forecast, idx) => (
        <div key={idx} className="forecast-item">
          <div className="flex flex-col sm:flex-row sm:gap-8 items-center">
            <img
              className="size-12 sm:size-16"
              src={
                forecast.isDay
                  ? getWeatherIconURL(forecast.dayIconId)
                  : getWeatherIconURL(forecast.nightIconId)
              }
              alt="weather icon"
            />
            <p>
              {lang === "en"
                ? forecast.timeDisplay
                : forecast.chineseTimeDisplay}
            </p>
          </div>
          <div>
            <p>
              {translation.uvShort[lang]}: {forecast.uv}
            </p>
            <p>
              {String.fromCodePoint(weatherEmoji.rain)} {forecast.rain}mm
            </p>
          </div>
          <div>
            <p>
              {String.fromCodePoint(weatherEmoji.temperature)} {forecast.temp}
              °C
            </p>
            <p>
              {String.fromCodePoint(weatherEmoji.humidity)} {forecast.rh}%
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
