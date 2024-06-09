import { degSymbol } from "@/app/util";
export default function TemperatureCard({ data }) {
  const currentTemp = data.current.temperature_2m;
  const minTemp = data.daily.temperature_2m_min[0];
  const maxTemp = data.daily.temperature_2m_max[0];
  const apparentTemp = data.current.apparent_temperature;

  return (
    <div className="weather-card align-col">
      <p className="card-title">Temperature</p>
      <p className="card-content">
        {currentTemp}
        {degSymbol}
      </p>
      <p className="card-remark">
        {minTemp} - {maxTemp}{degSymbol}
      </p>
      <p className="card-remark">
        Feels like: {apparentTemp}
        {degSymbol}
      </p>
    </div>
  );
}
