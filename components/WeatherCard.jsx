export default function WeatherCard({ weatherData }) {
  const weatherIconUrl = `https://www.weather.gov.hk/images/HKOWxIconOutline/pic${weatherData.icon}.png`

  return (
    <div className="bg-blue-100 flex justify-center items-center text-xl m-4 p-4 rounded-3xl">
      <div>
        <p>Temperature: {weatherData.temperature}</p>
        <p>Humidity: {weatherData.humidity}</p>
        <p>Rainfall: {weatherData.rainfall}</p>
        {/* <p>UV: {weatherData.uv}</p> */}
      </div>
      <div>
        <img className="w-20" src={weatherIconUrl} alt="weather icon" />
      </div>
    </div>
  );
}
