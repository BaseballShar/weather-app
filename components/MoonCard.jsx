export default function MoonCard({ data }) {
  const rise = data.data[0][1];
  const transit = data.data[0][2];
  const set = data.data[0][3];

  /* Moon phase emoji in terms of unicode decimal code points */
  const moonIcon = {
    new: 127761,
    waxingCrescent: 127762,
    firstQuarter: 127763,
    waxingGibbous: 127764,
    full: 127765,
    waningGibbous: 127766,
    thirdQuarter: 127767,
    waningCrescent: 127768,
  };

  function computeMoonPhase(rise) {
    if (rise < "01:30") {
      return "thirdQuarter"
    } else if (rise < "04:30") {
      return "waningCrescent"
    } else if (rise < "07:30") {
      return "new"
    } else if (rise < "10:30") {
      return "waxingCrescent"
    } else if (rise < "13:30") {
      return "firstQuarter"
    } else if (rise < "16:30") {
      return "waxingGibbous"
    } else if (rise < "19:30") {
      return "full"
    } else if (rise < "22:30"){
      return "waningGibbous"
    } else {
      return "thirdQuarter"
    }
  }

  return (
    <div className="weather-card">
      <span className="emoji mx-4">
        {String.fromCodePoint(moonIcon[computeMoonPhase(rise)])}
      </span>
      <div>
        <p>Rise: {rise}</p>
        <p>Transit: {transit}</p>
        <p>Set: {set}</p>
      </div>
    </div>
  );
}
