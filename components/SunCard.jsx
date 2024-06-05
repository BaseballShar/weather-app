export default function SunCard({data}) {
  const rise = data.data[0][1]
  const transit = data.data[0][2]
  const set = data.data[0][3]
  return (
    <div className="weather-card">
      <p>
        Picture of sun / season
      </p>
      <div>
        <p>Sun rise: {rise}</p>
        <p>Sun transit: {transit}</p>
        <p>Sun set: {set}</p>
      </div>
    </div>
  )
}

