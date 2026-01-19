import { TimeForecastCard } from "./TimeForecastCard";

export const TimeForecastContainer = () => {
  return (
    <div className="field">
      <div className="uppercase mb-[30px] font-bold">Today's Forecast</div>
      <div className="flex divide-x divide-white/20">
        <TimeForecastCard />
        <TimeForecastCard />
        <TimeForecastCard />
        <TimeForecastCard />
        <TimeForecastCard />
        <TimeForecastCard />
      </div>
    </div>
  );
};
