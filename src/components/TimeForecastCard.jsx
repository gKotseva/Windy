import { getWeatherIcon } from "../utils/weatherIcons";

export const TimeForecastCard = ({ time, weather }) => {
  const Icon = getWeatherIcon(weather.weather_code, time);

  return (
    <div className="flex flex-col gap-4 items-center px-6">
      <h3 className="font-bold">{time}</h3>
      <Icon color="white" size={70} />
      <h3 className="text-white">{weather.temperature.toFixed()}&#176;</h3>
    </div>
  );
};
