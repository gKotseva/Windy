import { IoSunny } from "react-icons/io5";
import { getWeatherDescription } from "../../utils/weatherCode";
import { getWeatherIcon } from "../../utils/weatherIcons";
import { getCountry, getLocationName } from "../../utils/locationName";

export const CurrentWeather = ({ data }) => {
  const date = new Date(data.current.time);

  const day = date.toLocaleDateString("en-US", {
    weekday: "long",
  });

  const monthDay = date
    .toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    })
    .toUpperCase();

  const time = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const iconSrc = getWeatherIcon(data.current.weather_code, time);

  return (
    <div className="flex flex-col items-center gap-8 uppercase">
      <div>
        <p className="text-heading text-text capitalize text-center">
          {getLocationName(data.location)}, {getCountry(data.location)}
        </p>
        <p className="text-body text-neutral tracking-widest">
          {day} &#x2022; {monthDay} &#x2022; {time}
        </p>
      </div>
      <div className="text-center flex flex-col gap-2">
        <div className="flex items-center justify-center">
          <img
            src={iconSrc}
            alt="weather icon"
            className="size-[100px] object-contain"
          />
        </div>

        <p className="text-7xl font-bold text-text">
          {Math.round(data.current.temperature_2m)}
          <span className="text-4xl text-neutral align-top">&#176;</span>
        </p>
        <p className="text-heading text-tertiary tracking-[0.3em]">
          {getWeatherDescription(data.current.weather_code)}
        </p>
      </div>
      <div className="text-body text-neutral font-bold flex gap-5 text-center">
        <div>
          <p>High</p>
          <p>
            {Math.round(data.daily.temperature_2m_max[0])}
            &#176;
          </p>
        </div>
        <div className="h-12 w-px bg-outline" />
        <div>
          <p>Low</p>
          <p>
            {Math.round(data.daily.temperature_2m_min[0])}
            &#176;
          </p>
        </div>
      </div>
    </div>
  );
};
