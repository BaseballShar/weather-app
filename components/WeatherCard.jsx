export default function WeatherCard({ data, meteoData, locationData }) {
  const weatherIconUrl = `https://www.weather.gov.hk/images/HKOWxIconOutline/pic${data.icon[0]}.png`;
  /* HKO data */
  /* const temperature = data.temperature.data[2].value; */
  /* const humidity = data.humidity.data[0].value; */
  /* const rainfall = data.rainfall.data[7].max; */
  /* const uvValue = data.uvindex === "" ? 0 : data.uvindex.data[0].value; */
  const uvDesc = data.uvindex === "" ? "" : `(${data.uvindex.data[0].desc})`;

  /* Meteo data */
  const temperature = Math.round(meteoData.current.temperature_2m);
  const humidity = Math.round(meteoData.current.relative_humidity_2m);
  const rainfall = Math.round(meteoData.current.precipitation);
  const uvValue = Math.round(meteoData.current.uv_index);

  /* Location data */
  const place = locationData.name;

  return (
    <div className="weather-card">
      <p className="card-title">{place}</p>
      <div className="align-row mt-2">
        <img className="w-20 h-20" src={weatherIconUrl} alt="weather icon" />
        <div className="card-remark">
          <p>T: {temperature}°C</p>
          <p>RH: {humidity}%</p>
          <p>Rain: {rainfall} mm</p>
          <p>
            UV: {uvValue} {uvDesc}
          </p>
        </div>
      </div>
    </div>
  );
}
