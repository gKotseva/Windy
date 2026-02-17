import { getWeatherIcon } from "../utils/weatherIcons";
import { getWeatherType } from "../utils/weatherType";

export const SevenDayForecastCard = ({ date, minTemp, maxTemp, code }) => {
  const iconSrc = getWeatherIcon(code);

  return (
    <div className="flex items-center py-6 w-100">
      <h3 className="font-bold text-left w-32">
        {new Date(date).toLocaleDateString("en-US", { weekday: "long" })}
      </h3>
      <div className="flex items-center justify-center w-50 gap-4">
        <img src={iconSrc} alt="weather icon" className="w-15" />
        <p className="text-white whitespace-nowrap">{getWeatherType(code)}</p>
      </div>
      <h3 className="text-white text-right w-32 whitespace-nowrap">
        {maxTemp.toFixed()}° / {""}
        <span className="secondary-text">{minTemp.toFixed()}°</span>
      </h3>
    </div>
  );
};
