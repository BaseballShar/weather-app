import { translation } from "@/app/translation";

export default function UVCard({ data, lang }) {
  const uv = data.current.uv_index

  return (
    <div className="weather-card align-col">
      <p className="card-title">{translation.uv[lang]}</p>
      <p className="card-content">{uv}</p>
    </div>
  );
}
