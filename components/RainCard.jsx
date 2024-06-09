export default function RainCard({ data }) {
  const rainAmount = data.current.precipitation
  const chanceOfRain = data.current.precipitation_probability
  const cloudCover = data.current.cloud_cover
  return (
    <div className="weather-card align-col">
      <p className="card-title">Rain</p>
      <p className="card-content">{rainAmount} mm</p>
      <p className="card-remark">Chance of rain: {chanceOfRain}%</p>
      <p className="card-remark">Cloud coverage: {cloudCover}%</p>
    </div>
  );
}
