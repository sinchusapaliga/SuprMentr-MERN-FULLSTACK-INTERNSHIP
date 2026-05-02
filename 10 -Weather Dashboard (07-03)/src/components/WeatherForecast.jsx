import { getWeatherInfo } from '../weatherService';

export default function WeatherForecast({ data }) {
  const daily = data.daily;
  
  const days = Array.from({ length: 6 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i + 1);
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  });

  return (
    <div className="glass-panel forecast-container fade-in" style={{ animationDelay: '0.2s' }}>
      <h2 className="forecast-title">7-Day Forecast</h2>
      <div className="forecast-list">
        {days.map((day, i) => {
          const weather = getWeatherInfo(daily.weather_code[i+1]);
          return (
            <div key={day} className="forecast-item">
              <span className="forecast-day">{day}</span>
              <span className="forecast-icon">{weather.emoji}</span>
              <div className="forecast-temp">
                <span className="max-temp">{Math.round(daily.temperature_2m_max[i+1])}°</span>
                <span className="min-temp">{Math.round(daily.temperature_2m_min[i+1])}°</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
