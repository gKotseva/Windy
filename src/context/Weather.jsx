import { useQuery } from "@tanstack/react-query";
import { createContext, useContext, useEffect, useState } from "react";
import { fetchCurrentWeather, todayWeather } from "../handlers/weather";
import { getCityName, getUserLocation } from "../handlers/location";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const location = await getUserLocation();
        setLocation(location);
      } catch (e) {
        console.error(e);
      }
    };
    fetch();
  }, []);

  const currentQuery = useQuery({
    queryFn: () => fetchCurrentWeather(location.latitude, location.longitude),
    queryKey: ["current", location],
    enabled: !!location,
  });

  const forecastQuery = useQuery({
    queryFn: () => todayWeather(location.latitude, location.longitude),
    queryKey: ["forecast", location],
    enabled: !!location,
  });

  const cityNameQuery = useQuery({
    queryFn: () => getCityName(location.latitude, location.longitude),
    queryKey: ["city", location],
    enabled: !!location,
  });

  if (
    !location ||
    currentQuery.isLoading ||
    forecastQuery.isLoading ||
    cityNameQuery.isLoading
  ) {
    return <div>Loading...</div>;
  }

  const value = {
    current: {
      city: cityNameQuery.data,
      temperature: currentQuery.data.current.temperature_2m,
      feels_like: currentQuery.data.current.apparent_temperature,
      chance_of_rain: currentQuery.data.daily.precipitation_probability_max,
      sun_rise: currentQuery.data.daily.sunrise,
      sun_set: currentQuery.data.daily.sunset,
      humidity: currentQuery.data.current.relative_humidity_2m,
      surface_pressure: currentQuery.data.current.surface_pressure,
      wind_gusts: currentQuery.data.current.wind_gusts_10m,
      wind_speed: currentQuery.data.current.wind_speed_10m,
      weather_code: currentQuery.data.current.weather_code,
      time: `${new Date(currentQuery.data.current.time).getHours()}:${new Date(
        currentQuery.data.current.time,
      ).getMinutes()}`,
    },
    today: {
      "6:00": {
        temperature: forecastQuery.data.hourly.temperature_2m[6],
        weather_code: forecastQuery.data.hourly.weather_code[6],
      },
      "9:00": {
        temperature: forecastQuery.data.hourly.temperature_2m[9],
        weather_code: forecastQuery.data.hourly.weather_code[9],
      },
      "12:00": {
        temperature: forecastQuery.data.hourly.temperature_2m[12],
        weather_code: forecastQuery.data.hourly.weather_code[12],
      },
      "15:00": {
        temperature: forecastQuery.data.hourly.temperature_2m[15],
        weather_code: forecastQuery.data.hourly.weather_code[15],
      },
      "18:00": {
        temperature: forecastQuery.data.hourly.temperature_2m[18],
        weather_code: forecastQuery.data.hourly.weather_code[18],
      },
      "21:00": {
        temperature: forecastQuery.data.hourly.temperature_2m[21],
        weather_code: forecastQuery.data.hourly.weather_code[21],
      },
    },
  };

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
