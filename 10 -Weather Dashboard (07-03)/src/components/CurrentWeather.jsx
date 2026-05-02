import { getWeatherInfo } from '../weatherService';

export default function CurrentWeather({ data, locationName }) {
  const current = data.current;
  const weather = getWeatherInfo(current.weather_code);
  
  const dateStr = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="glass-panel fade-in">
      <div className="weather-main">
        <div className="main-left">
          <p className="weather-date">{dateStr}</p>
          <h1 className="city-name">{locationName}</h1>
          <div className="temp-container">
            <span className="main-temp">{Math.round(current.temperature_2m)}</span>
            <span className="temp-unit">°C</span>
          </div>
        </div>
        
        <div className="main-right">
          <span className="weather-icon-large">{weather.emoji}</span>
          <p className="weather-desc">{weather.label}</p>
        </div>
      </div>

      <div className="details-grid">
        <DetailCard label="Feels Like" value={`${Math.round(current.apparent_temperature)}°C`} />
        <DetailCard label="Humidity" value={`${current.relative_humidity_2m}%`} />
        <DetailCard label="Wind Speed" value={`${current.wind_speed_10m} km/h`} />
      </div>
    </div>
  );
}

function DetailCard({ label, value }) {
  return (
    <div className="detail-card">
      <span className="detail-label">{label}</span>
      <span className="detail-value">{value}</span>
    </div>
  );
}
