import { degSymbol } from "@/app/util";

export default function HumidityCard({ data }) {
  const humidity = data.current.relative_humidity_2m;
  const dewpoint = data.current.dewpoint_2m;
  return (
    <div className="weather-card flex-col">
      <p className="card-title">Humidity</p>
      <p className="card-content">{humidity}%</p>
      <p className="card-remark">
        Dewpoint: {dewpoint}
        {degSymbol}
      </p>
    </div>
  );
}
