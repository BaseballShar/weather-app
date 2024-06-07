export default function WeatherCard({ data }) {
  const weatherIconUrl = `https://www.weather.gov.hk/images/HKOWxIconOutline/pic${data.icon[0]}.png`;
  const temperature = data.temperature.data[2].value;
  const humidity = data.humidity.data[0].value;
  const rainfall = data.rainfall.data[7].max;
  const uvValue = data.uvindex === "" ? 0 : data.uvindex.data[0].value;
  const uvDesc = data.uvindex === "" ? "" : `(${data.uvindex.data[0].desc})`;

  return (
    <div className="summary-card">
      <p className="card-title">Summary</p>
      <div className="flex items-center justify-around">
        <img
          className="w-20 h-20"
          src={weatherIconUrl}
          alt="weather icon"
        />
        <div>
          <p>T: {temperature}°C</p>
          <p>RH: {humidity}%</p>
          <p>Rain: {rainfall}mm</p>
          <p>
            UV: {uvValue} {uvDesc}
          </p>
        </div>
      </div>
    </div>
  );
}
