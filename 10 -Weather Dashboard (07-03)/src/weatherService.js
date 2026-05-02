const GEO_API = 'https://geocoding-api.open-meteo.com/v1/search';
const WEATHER_API = 'https://api.open-meteo.com/v1/forecast';

/**
 * Fetches coordinates for a given city name.
 * @param {string} cityName 
 * @returns {Promise<{lat: number, lon: number, name: string}>}
 */
export async function getCoordinates(cityName) {
  try {
    const response = await fetch(`${GEO_API}?name=${encodeURIComponent(cityName)}&count=1&language=en&format=json`);
    if (!response.ok) throw new Error('Geocoding service unavailable');
    
    const data = await response.json();
    if (!data.results || data.results.length === 0) {
      throw new Error(`City "${cityName}" not found. Try searching for a different city.`);
    }
    
    const { latitude, longitude, name, country } = data.results[0];
    return { lat: latitude, lon: longitude, name: `${name}, ${country}` };
  } catch (error) {
    console.error('Geocoding error:', error);
    throw error;
  }
}

/**
 * Fetches current and forecast weather data for given coordinates.
 * @param {number} lat 
 * @param {number} lon 
 * @returns {Promise<any>}
 */
export async function getWeatherData(lat, lon) {
  try {
    const params = new URLSearchParams({
      latitude: lat,
      longitude: lon,
      current: ['temperature_2m', 'relative_humidity_2m', 'apparent_temperature', 'is_day', 'weather_code', 'wind_speed_10m'],
      daily: ['weather_code', 'temperature_2m_max', 'temperature_2m_min', 'uv_index_max'],
      timezone: 'auto',
      forecast_days: 7
    });

    const response = await fetch(`${WEATHER_API}?${params.toString()}`);
    if (!response.ok) throw new Error('Weather service unavailable');

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Weather data error:', error);
    throw error;
  }
}

/**
 * Maps Open-Meteo weather codes to human-readable labels and emojis.
 * @param {number} code 
 * @returns {{label: string, emoji: string}}
 */
export function getWeatherInfo(code) {
  const codes = {
    0: { label: 'Clear sky', emoji: '☀️' },
    1: { label: 'Mainly clear', emoji: '🌤️' },
    2: { label: 'Partly cloudy', emoji: '⛅' },
    3: { label: 'Overcast', emoji: '☁️' },
    45: { label: 'Foggy', emoji: '🌫️' },
    48: { label: 'Depositing rime fog', emoji: '🌫️' },
    51: { label: 'Light drizzle', emoji: '🌧️' },
    53: { label: 'Moderate drizzle', emoji: '🌧️' },
    55: { label: 'Dense drizzle', emoji: '🌧️' },
    61: { label: 'Slight rain', emoji: '🌦️' },
    63: { label: 'Moderate rain', emoji: '🌧️' },
    65: { label: 'Heavy rain', emoji: '🌧️' },
    71: { label: 'Slight snow fall', emoji: '❄️' },
    73: { label: 'Moderate snow fall', emoji: '❄️' },
    75: { label: 'Heavy snow fall', emoji: '❄️' },
    80: { label: 'Slight rain showers', emoji: '🌦️' },
    81: { label: 'Moderate rain showers', emoji: '🌧️' },
    82: { label: 'Violent rain showers', emoji: '⛈️' },
    95: { label: 'Thunderstorm', emoji: '⛈️' },
    96: { label: 'Thunderstorm with slight hail', emoji: '⛈️' },
    99: { label: 'Thunderstorm with heavy hail', emoji: '⛈️' },
  };
  return codes[code] || { label: 'Unknown', emoji: '🌡️' };
}
