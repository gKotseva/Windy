import { DayCard } from "./DayCard";

export const WeeklyForecast = ({ data }) => {
  return (
    <div className="flex flex-col gap-5">
      <p className="card-heading">7-day forecast</p>

      <div className="flex gap-3 mt-8 overflow-x-auto pb-2 md:justify-around md:overflow-visible">
        {data.daily.time.map((date, index) => (
          <DayCard
            key={date}
            date={date}
            high={data.daily.temperature_2m_max[index]}
            low={data.daily.temperature_2m_min[index]}
            weatherCode={data.daily.weather_code[index]}
          />
        ))}
      </div>
    </div>
  );
};
