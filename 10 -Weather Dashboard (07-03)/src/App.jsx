import { useState, useEffect, useCallback } from 'react';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import WeatherForecast from './components/WeatherForecast';
import { Loading, Error } from './components/StatusOverlay';
import { getCoordinates, getWeatherData } from './weatherService';
import './App.css';

const DEFAULT_CITY = 'Mumbai';

export default function App() {
  const [weather, setWeather] = useState(null);
  const [locationName, setLocationName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = useCallback(async (cityName) => {
    setLoading(true);
    setError(null);
    try {
      const coords = await getCoordinates(cityName);
      const data = await getWeatherData(coords.lat, coords.lon);
      setWeather(data);
      setLocationName(coords.name);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
      setWeather(null);
    } finally {
      setLoading(false);
    }
  }, []);

  // Initial fetch
  useEffect(() => {
    fetchWeather(DEFAULT_CITY);
  }, [fetchWeather]);

  const handleSearch = (cityName) => {
    fetchWeather(cityName);
  };

  const handleRetry = () => {
    fetchWeather(locationName.split(',')[0] || DEFAULT_CITY);
  };

  return (
    <div className="app-container">
      <SearchBar onSearch={handleSearch} />

      {loading && <Loading />}
      
      {error && !loading && (
        <Error message={error} onRetry={handleRetry} />
      )}

      {!loading && !error && weather && (
        <>
          <CurrentWeather data={weather} locationName={locationName} />
          <WeatherForecast data={weather} />
        </>
      )}

      {!loading && !error && !weather && (
        <div className="status-container fade-in">
          <p className="text-secondary">Search for a city to see the weather.</p>
        </div>
      )}
    </div>
  );
}
