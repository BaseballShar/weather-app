export default function PressureCard({ data }) {
  const pressure = data.current.pressure_msl;
  return (
    <div className="weather-card align-col">
      <p className="card-title">Pressure</p>
      <p className="card-content">{pressure} hPa</p>
    </div>
  );
}
