import { useWeather } from "../context/Weather";
import { TimeForecastCard } from "./TimeForecastCard";

export const TimeForecastContainer = () => {
  const { today } = useWeather();

  return (
    <div className="field">
      <div className="uppercase mb-[30px] font-bold">Today's Forecast</div>
      <div className="flex divide-x divide-white/20">
        {Object.keys(today).map((key) => (
          <TimeForecastCard time={key} weather={today[key]} key={key} />
        ))}
      </div>
    </div>
  );
};
