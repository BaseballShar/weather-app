export default function UVCard({ data }) {
  const uv = data.current.uv_index
  return (
    <div className="weather-card align-col">
      <p className="card-title">UV</p>
      <p className="card-content">{uv}</p>
    </div>
  );
}
