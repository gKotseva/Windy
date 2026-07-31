import { useState } from "react";
import { getWeatherIcon } from "../../utils/weatherIcons";

export const HourlyForecast = ({ data }) => {
  const [activeBlock, setActiveBlock] = useState(0);

  const currentHourIndex = data.hourly.time.findIndex(
    (time) => time.slice(0, 13) === data.current.time.slice(0, 13),
  );

  const startIndex = currentHourIndex + activeBlock * 6;

  const hours = data.hourly.time.slice(startIndex, startIndex + 6);

  return (
    <div className="card w-full overflow-hidden">
      <div className="flex justify-between items-start gap-4">
        <div className="uppercase font-bold card-heading">
          <p className="text-primary tracking-[0.2em] md:tracking-[0.3em]">
            Hourly timeline
          </p>
          <p className="card-body">Next 6 hours</p>
        </div>

        <div className="flex gap-2 items-center shrink-0">
          {Array.from({ length: 3 }).map((_, index) => (
            <span
              key={index}
              onClick={() => setActiveBlock(index)}
              className={`size-2 rounded-full cursor-pointer transition-colors ${
                activeBlock === index ? "bg-primary" : "bg-neutral"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="flex gap-8 mt-8 overflow-x-auto pb-2 md:justify-around md:overflow-visible">
        {hours.map((hour, index) => {
          const hourlyIndex = startIndex + index;

          return (
            <TimeCard
              key={hour}
              time={hour}
              temperature={data.hourly.temperature_2m[hourlyIndex]}
              iconCode={data.hourly.weather_code[hourlyIndex]}
              active={hourlyIndex === currentHourIndex}
            />
          );
        })}
      </div>
    </div>
  );
};

export const TimeCard = ({ time, temperature, iconCode, active }) => {
  const formattedTime = time.split("T")[1];

  return (
    <div className="flex flex-col items-center justify-center gap-5 min-w-[60px]">
      <p className="text-neutral">{formattedTime}</p>

      <div
        className={`rounded-full transition-all ${
          active
            ? "size-4 bg-tertiary ring-4 ring-tertiary/20"
            : "size-2 bg-neutral"
        }`}
      />

      <div className="h-px w-12 bg-outline" />

      <img
        src={getWeatherIcon(iconCode, formattedTime)}
        alt="weather icon"
        className="size-8 object-contain"
      />

      <p className="card-highlight">{Math.round(temperature)}&#176;</p>
    </div>
  );
};
