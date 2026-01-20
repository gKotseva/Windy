import { SevenDayForecastCard } from "./SevenDayForecastCard";

export const SevenDayForecastContainer = () => {
  return (
    <div className="field">
      <div className="uppercase mb-[30px] font-bold">7-Day Forecast</div>
      <div className="flex flex-col divide-y divide-white/20">
        <SevenDayForecastCard />
        <SevenDayForecastCard />
        <SevenDayForecastCard />
        <SevenDayForecastCard />
        <SevenDayForecastCard />
        <SevenDayForecastCard />
        <SevenDayForecastCard />
      </div>
    </div>
  );
};
