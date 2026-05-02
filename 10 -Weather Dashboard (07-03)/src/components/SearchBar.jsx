import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = city.trim();
    if (trimmed) onSearch(trimmed);
    setCity('');
  };

  return (
    <form className="search-container fade-in" onSubmit={handleSubmit}>
      <div className="search-input-wrapper">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          className="search-input"
          placeholder="Search for a city (e.g., London, New York...)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
    </form>
  );
}
