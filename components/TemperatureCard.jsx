import { translation } from "@/app/translation";
import { degSymbol } from "@/app/util";
export default function TemperatureCard({ data , lang}) {
  const currentTemp = Math.round(data.current.temperature_2m);
  const minTemp = Math.round(data.daily.temperature_2m_min[0]);
  const maxTemp = Math.round(data.daily.temperature_2m_max[0]);
  const apparentTemp = Math.round(data.current.apparent_temperature);

  return (
    <div className="weather-card align-col">
      <p className="card-title">{translation.temperature[lang]}</p>
      <p className="card-content">
        {currentTemp}
        {degSymbol}C
      </p>
      <p className="card-remark">
        {translation.today[lang]}: {minTemp} - {maxTemp}
        {degSymbol}C
      </p>
      <p className="card-remark">
        {translation.feelsLike[lang]}: {apparentTemp}
        {degSymbol}C
      </p>
    </div>
  );
}
