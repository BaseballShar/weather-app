export default function HourlyForecastCard({data}) {
  const hourlyForcasts = data.hourly

  function formatHour(hour) {
    const suffix = hour < 12 ? "AM" : "PM"
    const value = hour > 12 ? hour - 12 : hour
    return `${value} ${suffix}`
  }

  return (
    <div className="forecast-card">
      <div className="flex flex-col">
        <p className="text-center">Hourly Forcast</p>
        {hourlyForcasts.time.map((_, idx) =>
          <div className="flex justify-around border-t border-black">
            <div>
              <p>{formatHour(idx)}</p>
              <p>UV: {hourlyForcasts.uv_index[idx]}</p>
            </div>
            <div>
              <p>T: {hourlyForcasts.temperature_2m[idx]}°C</p>
              <p>RH: {hourlyForcasts.relative_humidity_2m[idx]}%</p>
            </div>
            <div>
              <p>{hourlyForcasts.precipitation_probability[idx]}%</p>
              <p>{hourlyForcasts.rain[idx]}mm</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
