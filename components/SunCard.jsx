export default function SunCard({data}) {
  const rise = data.data[0][1]
  const transit = data.data[0][2]
  const set = data.data[0][3]

  function getSunIcon(rise, set) {
    const today = new Date()
    const minute = today.getMinutes()
    const hour = today.getHours()
    const time = `${hour}:${minute}`

    /* Render day time emoji */
    if (time <= set && time >= rise) {
      return 127774
      /* Render night time emoji */
    } else {
      return 11088
    }
  }

  return (
    <div className="weather-card align-row">
      <span className="emoji mx-4">
        {String.fromCodePoint(getSunIcon(rise, set))}
      </span>
      <div className="card-remark">
        <p>Rise: {rise}</p>
        <p>Transit: {transit}</p>
        <p>Set: {set}</p>
      </div>
    </div>
  )
}

