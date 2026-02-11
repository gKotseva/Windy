import { AirConditions } from "../components/AirConditions";
import { CurrentWeather } from "../components/CurrentWeather";
import { Search } from "../components/Search";
import { SevenDayForecastContainer } from "../components/SevenDayForecastContainer";
import { Sidebar } from "../components/Sidebar";
import { TimeForecastContainer } from "../components/TimeForecastContainer";

export const Main = () => {
  return (
    <div className="flex m-5 w-full justify-between">
      <div className="flex flex-col gap-3">
        <Search />
        <CurrentWeather />
        <TimeForecastContainer />
        <AirConditions />
      </div>
      <div>
        <SevenDayForecastContainer />
      </div>
    </div>
  );
};
