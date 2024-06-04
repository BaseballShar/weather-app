export default function WeatherCard({ weatherData }) {
  const weatherIconUrl = `https://www.weather.gov.hk/images/HKOWxIconOutline/pic${weatherData.icon[0]}.png`
  const temperature = weatherData.temperature.data[2].value;
  const humidity = weatherData.humidity.data[0].value;
  const rainfall = weatherData.rainfall.data[7].max;

  return (
    <div className="bg-blue-100 flex justify-center items-center text-xl m-4 p-4 rounded-3xl">
      <div>
        <p>Temperature: {temperature}°C</p>
        <p>Humidity: {humidity}%</p>
        <p>Rainfall: {rainfall}mm</p>
        {/* <p>UV: {weatherData.uv}</p> */}
      </div>
      <div>
        <img className="w-20" src={weatherIconUrl} alt="weather icon" />
      </div>
    </div>
  );
}
