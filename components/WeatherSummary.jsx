export default function WeatherSummary({ weatherData }) {

  return (
    <div className="bg-blue-100 flex justify-around text-xl">
      <div>
        <p>Temperature: {weatherData.temperature}</p>
        <p>Humidity: {weatherData.humidity}</p>
      </div>
      <div>
        <p>Rainfall: {weatherData.rainfall}</p>
        <p>UV: {weatherData.uv}</p>
      </div>
    </div>
  );
}
