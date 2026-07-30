import { useEffect, useState } from "react";
import { getWeather, getLocation, getAirQuality } from "../api/weather";

export const useWeather = (latitude, longitude) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (latitude == null || longitude == null) {
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);

        const weatherData = await getWeather(latitude, longitude);
        const airData = await getAirQuality(latitude, longitude);
        const locationData = await getLocation(latitude, longitude);

        setWeather({
          ...weatherData,
          airQuality: airData,
          location: locationData,
        });
      } catch (error) {
        console.error("FETCH ERROR:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [latitude, longitude]);

  return { weather, loading };
};
