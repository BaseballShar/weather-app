import { translation } from "@/app/translation";

export default function PressureCard({ data, lang }) {
  const pressure = data.current.pressure_msl;

  return (
    <div className="weather-card align-col">
      <p className="card-title">{translation.pressure[lang]}</p>
      <p className="card-content">{pressure} hPa</p>
    </div>
  );
}
