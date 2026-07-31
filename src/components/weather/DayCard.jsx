import { getWeatherIcon } from "../../utils/weatherIcons";

export const DayCard = ({ date, high, low, weatherCode }) => {
  const day = new Date(date)
    .toLocaleDateString("en-US", {
      weekday: "short",
    })
    .toUpperCase();

  return (
    <div className="card flex-1 gap-3 text-center items-center">
      <p className="card-heading">{day}</p>

      <img
        src={getWeatherIcon(weatherCode)}
        alt="weather icon"
        className="size-8 object-contain"
      />

      <div>
        <p className="card-highlight">{Math.round(high)}&#176;</p>

        <p className="card-body">{Math.round(low)}&#176;</p>
      </div>
    </div>
  );
};
