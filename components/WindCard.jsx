import { translation } from "@/app/translation";

export default function WindCard({ data, lang }) {
  const windSpeed = data.current.wind_speed_10m;
  const windDirection = data.current.wind_direction_10m;

  return (
    <div className="weather-card align-col">
      <p className="card-title">{translation.wind[lang]}</p>
      <p className="card-content">{translation.speed[lang]}: {windSpeed} km/h</p>
      <p className="card-content">{translation.direction[lang]}: {windDirection}</p>
    </div>
  );
}
