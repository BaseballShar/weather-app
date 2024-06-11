import { degSymbol } from "@/app/util";
export default function TemperatureCard({ data }) {
  const currentTemp = Math.round(data.current.temperature_2m);
  const minTemp = Math.round(data.daily.temperature_2m_min[0]);
  const maxTemp = Math.round(data.daily.temperature_2m_max[0]);
  const apparentTemp = Math.round(data.current.apparent_temperature);

  return (
    <div className="weather-card align-col">
      <p className="card-title">Temperature</p>
      <p className="card-content">
        {currentTemp}
        {degSymbol}
      </p>
      <p className="card-remark">
        Today: {minTemp} - {maxTemp}
        {degSymbol}
      </p>
      <p className="card-remark">
        Feels like: {apparentTemp}
        {degSymbol}
      </p>
    </div>
  );
}
