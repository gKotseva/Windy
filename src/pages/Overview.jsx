import { AirQuality } from "../components/weather/AirQuality";
import { CurrentWeather } from "../components/weather/CurrentWeather";
import { Details } from "../components/weather/Details";
import { HourlyForecast } from "../components/weather/HourlyForecast";
import { LiveRadar } from "../pages/LiveRadar";
import { SunSchedule } from "../components/weather/SunSchedule";
import { UVIndex } from "../components/weather/UVIndex";
import { WeeklyForecast } from "../components/weather/WeeklyForecast";

export const Overview = ({ data }) => {
  return (
    <div className="p-10 flex flex-col gap-10">
      <div className="flex w-full items-center">
        <div className="flex-[1]">
          <CurrentWeather data={data} />
        </div>

        <div className="flex-1">
          <HourlyForecast data={data} />
        </div>
      </div>
      <div>
        <WeeklyForecast data={data} />
      </div>
      <div className="flex gap-2 w-full items-center">
        <div className="flex-[1]">
          <Details data={data} />
        </div>
        <div className="flex-[2]">
          <LiveRadar data={data} view="overview" />
        </div>
      </div>
      <div className="flex gap-6">
        <UVIndex data={data} />
        <AirQuality data={data} />
        <SunSchedule data={data} />
      </div>
    </div>
  );
};
