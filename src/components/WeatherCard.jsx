import { useWeather } from "../context/Weather";
import { getWeatherIcon } from "../utils/weatherIcons";

export const WeatherCard = () => {
  const { current } = useWeather();
  const iconSrc = getWeatherIcon(current.weather_code, current.time);

  return (
    <div className="w-50">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold main-text">{current.city}</h1>
          <h2 className="text-4xl font-bold mt-1">25°</h2>
        </div>
        <img src={iconSrc} alt="weather icon" className="w-20" />
      </div>
      <p>Chance of rain: {current.chance_of_rain} %</p>
    </div>
  );
};
