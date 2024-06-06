import { getWeatherIconURL } from "@/app/util";

export default function HourlyForecastCard({ data }) {
  /* Covert 24 hour system to 12 hour system */
  function formatHour(hour) {
    const suffix = hour < 12 ? "AM" : "PM";
    const value = hour > 12 ? hour - 12 : hour;
    return `${value} ${suffix}`;
  }

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
      time: formatHour(idx),
      temp: Math.round(data.hourly.temperature_2m[idx]),
      rh: data.hourly.relative_humidity_2m[idx],
      precProb: data.hourly.precipitation_probability[idx],
      rain: data.hourly.rain[idx],
      uv: Math.round(data.hourly.uv_index[idx]),
      iconId: toHKOWeatherCode.day[parseInt(data.hourly.weather_code[idx])],
    };
    return forcasts;
  });

  const bihourlyForcasts = hourlyForcasts.filter((_, idx) => idx % 2 === 0);

  return (
    <div className="forecast-card">
      <div className="flex flex-col">
        <p className="text-center">Hourly Forcast</p>
        {bihourlyForcasts.map((forcast) => (
          <div className="flex justify-around border-t border-black">
            <div>
              <img className="w-16" src={getWeatherIconURL(forcast.iconId)} alt="weather icon" />
              <p>{forcast.time}</p>
              <p>UV: {forcast.uv}</p>
            </div>
            <div>
              <p>T: {forcast.temp}°C</p>
              <p>RH: {forcast.rh}%</p>
            </div>
            <div>
              <p>{forcast.precProb}%</p>
              <p>{forcast.rain}mm</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
