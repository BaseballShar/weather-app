import {getTimeIdx} from "@/app/util";
export default function VisibilityCard({ data }) {
  function getVisCondition(visKm) {
    if (visKm > 20) {
      return "Very clear";
    } else if (visKm > 10) {
      return "Clear";
    } else if (visKm > 4) {
      return "Light haze";
    } else if (visKm > 2) {
      return "Haze";
    } else if (visKm > 1) {
      return "Light fog";
    } else {
      return "Dense fog";
    }
  }

  /* Visibility in meters and kilometers */
  const visMeter = data.hourly.visibility[getTimeIdx(data.hourly.time)];
  const visKm = Math.round(visMeter / 1000);

  return (
    <div className="weather-card flex-col">
      <p className="card-title">Visibility</p>
      <p className="card-content">{visKm} km</p>
      <p className="card-remark">{getVisCondition(visKm)}</p>
    </div>
  );
}
