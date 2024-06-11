export default function WindCard({ data }) {
  const windSpeed = data.current.wind_speed_10m;
  const windDirection = data.current.wind_direction_10m;
  return (
    <div className="weather-card align-col">
      <p className="card-title">Wind</p>
      <p className="card-content">Speed: {windSpeed} km/h</p>
      <p className="card-content">Direction: {windDirection}</p>
    </div>
  );
}
