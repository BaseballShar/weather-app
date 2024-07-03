import { translation } from "@/app/translation";
import { degSymbol } from "@/app/util";

export default function WindCard({ data, lang }) {
  const windSpeed = data.current.wind_speed_10m;
  const windDirection = data.current.wind_direction_10m;

  function formatWindDirection(angle) {
    if (angle <= 90) {
      return `N${angle}${degSymbol}E`;
    } else if (angle <= 180) {
      return `S${180 - angle}${degSymbol}E`;
    } else if (angle <= 270) {
      return `S${angle - 180}${degSymbol}W`;
    } else {
      return `N${360 - angle}${degSymbol}W`;
    }
  }

  return (
    <div className="weather-card align-col">
      <p className="card-title">{translation.wind[lang]}</p>
      <p className="card-content">
        {translation.speed[lang]}: {windSpeed} km/h
      </p>
      <p className="card-content">
        {translation.direction[lang]}: {formatWindDirection(windDirection)}
      </p>
    </div>
  );
}
