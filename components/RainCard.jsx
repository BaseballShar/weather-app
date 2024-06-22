import { translation } from "@/app/translation";

export default function RainCard({ data, lang }) {
  const rainAmount = data.current.precipitation;
  const chanceOfRain = data.current.precipitation_probability;
  const cloudCover = data.current.cloud_cover;

  return (
    <div className="weather-card align-col">
      <p className="card-title">{translation.rain[lang]}</p>
      <p className="card-content">{rainAmount} mm</p>
      <p className="card-remark">
        {translation.chanceOfRain[lang]}: {chanceOfRain}%
      </p>
      <p className="card-remark">
        {translation.cloudCoverage[lang]}: {cloudCover}%
      </p>
    </div>
  );
}
