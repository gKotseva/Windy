import { useWeather } from "../context/Weather";
import { SevenDayForecastCard } from "./SevenDayForecastCard";

export const SevenDayForecastContainer = () => {
  const { sevenDays } = useWeather();

  return (
    <div className="field">
      <div className="uppercase mb-2 font-bold">7-Day Forecast</div>
      <div className="flex flex-col divide-y divide-white/20">
        {sevenDays.daily.time.map((e, index) => (
          <SevenDayForecastCard
            key={e}
            date={e}
            maxTemp={sevenDays.daily.temperature_2m_max[index]}
            minTemp={sevenDays.daily.temperature_2m_min[index]}
            code={sevenDays.daily.weather_code[index]}
          />
        ))}
      </div>
    </div>
  );
};
