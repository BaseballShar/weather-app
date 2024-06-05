export default function WeatherCard({ weatherData }) {
  const weatherIconUrl = `https://www.weather.gov.hk/images/HKOWxIconOutline/pic${weatherData.icon[0]}.png`
  const temperature = weatherData.temperature.data[2].value;
  const humidity = weatherData.humidity.data[0].value;
  const rainfall = weatherData.rainfall.data[7].max;
  const uvValue = weatherData.uvindex === "" ? 0 : weatherData.uvindex.data[0].value;
  const uvDesc = weatherData.uvindex === "" ? "" : (weatherData.uvindex.data[0].desc);

  return (
    <div className="weather-card">
      <div>
        <p>Temperature: {temperature}°C</p>
        <p>Humidity: {humidity}%</p>
        <p>Rainfall: {rainfall}mm</p>
        <p>UV: {uvValue} {uvDesc}</p>
      </div>
      <div>
        <img className="w-20" src={weatherIconUrl} alt="weather icon" />
      </div>
    </div>
  );
}
