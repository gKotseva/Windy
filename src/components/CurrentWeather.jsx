import { useWeather } from "../context/Weather";
import { getWeatherIcon } from "../utils/weatherIcons";

export const CurrentWeather = () => {
  const {
    current: {
      city,
      temperature,
      feels_like,
      chance_of_rain,
      weather_code,
      time,
    },
  } = useWeather();

  const iconSrc = getWeatherIcon(weather_code, time);

  return (
    <div className="flex w-full justify-between items-center max-h-56 p-20">
      <div>
        <h1 className="text-5xl font-bold main-text">{city}</h1>
        <p className="secondary-text">Chance of rain: {chance_of_rain}%</p>
        <h1 className="text-5xl font-bold mt-15 main-text">
          {temperature.toFixed()}&#176;
        </h1>
        <p className="secondary-text">
          Feels like: {feels_like.toFixed()}&#176;
        </p>
      </div>
      <div className="main-text">
        <img
          src={iconSrc}
          alt="weather icon"
          className="w-[200px] h-[200px] object-contain"
        />
      </div>
    </div>
  );
};
