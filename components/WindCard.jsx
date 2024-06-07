export default function WindCard({ data }) {
  const windSpeed = data.current.wind_speed_10m;
  const windDirection = data.current.wind_direction_10m;
  return (
    <div className="weather-card flex-col">
      <p className="card-title">Wind</p>
      <p className="card-content">Wind speed: {windSpeed} km/h</p>
      <p className="card-content">Wind direction: {windDirection}</p>
    </div>
  );
}
