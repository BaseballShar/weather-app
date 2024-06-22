import { translation } from "@/app/translation";
import { degSymbol } from "@/app/util";

export default function HumidityCard({ data, lang }) {
  const humidity = data.current.relative_humidity_2m;
  const dewpoint = data.current.dewpoint_2m;

  return (
    <div className="weather-card align-col">
      <p className="card-title">{translation.humidity[lang]}</p>
      <p className="card-content">{humidity}%</p>
      <p className="card-remark">
        {translation.dewpoint[lang]}: {dewpoint}
        {degSymbol}
      </p>
    </div>
  );
}
