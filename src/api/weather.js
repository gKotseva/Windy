const WEATHER_URL = "https://api.open-meteo.com/v1/forecast";
const GEO_URL = "https://nominatim.openstreetmap.org/reverse";
const AIR_URL = "https://air-quality-api.open-meteo.com/v1/air-quality";
const GEO_LOC_URL = "https://geocoding-api.open-meteo.com/v1";

export const getAirQuality = async (latitude, longitude) => {
  const response = await fetch(
    `${AIR_URL}?latitude=${latitude}&longitude=${longitude}&current=us_aqi,pm2_5,pm10`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch air quality");
  }

  return response.json();
};

export const getWeather = async (latitude, longitude) => {
  const response = await fetch(
    `${WEATHER_URL}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code,visibility,uv_index,relative_humidity_2m,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&timezone=auto`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }

  return response.json();
};

export const getLocation = async (latitude, longitude) => {
  const response = await fetch(
    `${GEO_URL}?lat=${latitude}&lon=${longitude}&format=json`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch location");
  }

  return response.json();
};

export const getSearchLocation = async (city) => {
  const response = await fetch(
    `${GEO_LOC_URL}/search?name=${city}&count=10&language=en&format=json`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch location");
  }

  return response.json();
};
