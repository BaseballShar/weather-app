export default function MoonCard({data}) {
  const rise = data.data[0][1]
  const transit = data.data[0][2]
  const set = data.data[0][3]
  return (
    <div className="weather-card">
      <p>
        Picture of moon
      </p>
      <div>
        <p>Moon rise: {rise}</p>
        <p>Moon transit: {transit}</p>
        <p>Moon set: {set}</p>
      </div>
    </div>
  )
}

