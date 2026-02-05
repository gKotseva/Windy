import { getWeatherIcon } from "../utils/weatherIcons";
import { getWeatherType } from "../utils/weatherType";

export const SevenDayForecastCard = ({ date, minTemp, maxTemp, code }) => {
  const Icon = getWeatherIcon(code);

  return (
    <div className="flex items-center py-6 w-90">
      <h3 className="font-bold text-left w-32">
        {new Date(date).toLocaleDateString("en-US", { weekday: "long" })}
      </h3>
      <div className="flex items-center justify-center w-48 gap-2">
        <Icon size={50} className="text-white" />
        <p className="text-white whitespace-nowrap">{getWeatherType(code)}</p>
      </div>
      <h3 className="text-white text-right w-32 whitespace-nowrap">
        {maxTemp.toFixed()}° / {""}
        <span className="secondary-text">{minTemp.toFixed()}°</span>
      </h3>
    </div>
  );
};
