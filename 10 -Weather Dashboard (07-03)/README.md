# 10 -Weather Dashboard (07-03)

## Description
A modern, real-time weather forecasting application. It leverages the Open-Meteo API to provide accurate weather data and forecasts for any city worldwide, featuring a sleek, responsive dashboard.

## Features
- **City Search**: Search for weather data by city name via geocoding.
- **Current Conditions**: Displays temperature, humidity, wind speed, and weather descriptions.
- **7-Day Forecast**: Provides a detailed look at the upcoming week's weather.
- **Dynamic UI**: Includes loading skeletons and robust error handling with retry functionality.
- **Glassmorphism Design**: High-end visual style with blurred panels and soft shadows.

## Tech Stack
- **Frontend**: React (Functional Components, Hooks)
- **Build Tool**: Vite
- **API**: Open-Meteo (Geocoding & Weather Data)
- **Styling**: Vanilla CSS

## Project Structure
```
10 -Weather Dashboard (07-03)/
├── src/
│   ├── components/       # SearchBar, CurrentWeather, WeatherForecast
│   ├── weatherService.js # API Integration logic
│   ├── App.jsx           # Main State Management
│   └── App.css           # Dashboard Styling
├── index.html
└── package.json
```

## Installation and Setup
1. Open the directory in your terminal.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Open the local URL provided in your browser.

## Prerequisites
- Node.js (v16.x or higher)
- npm or yarn
