import { translation } from "@/app/translation";
import { getTimeIdx } from "@/app/util";

export default function VisibilityCard({ data, lang }) {
  function getVisCondition(visKm) {
    if (visKm > 20) {
      return lang == "en" ? "Very clear" : "非常清晰";
    } else if (visKm > 10) {
      return lang == "en" ? "Clear" : "清晰";
    } else if (visKm > 4) {
      return lang == "en" ? "Light haze" : "薄霧";
    } else if (visKm > 2) {
      return lang == "en" ? "Haze" : "霧";
    } else if (visKm > 1) {
      return lang == "en" ? "Light fog" : "大霧";
    } else {
      return lang == "en" ? "Dense fog" : "濃霧";
    }
  }

  /* Visibility in meters and kilometers */
  const visMeter = data.hourly.visibility[getTimeIdx(data.hourly.time)];
  const visKm = Math.round(visMeter / 1000);

  return (
    <div className="weather-card align-col">
      <p className="card-title">{translation.visibility[lang]}</p>
      <p className="card-content">{visKm} km</p>
      <p className="card-remark">{getVisCondition(visKm)}</p>
    </div>
  );
}
