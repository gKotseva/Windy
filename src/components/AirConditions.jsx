import { useState } from "react";

import { WiRaindrop } from "react-icons/wi";
import { WiStrongWind } from "react-icons/wi";
import { WiThermometer } from "react-icons/wi";
import { WiHumidity } from "react-icons/wi";
import { useWeather } from "../context/Weather";
import { WiSunrise } from "react-icons/wi";
import { WiSunset } from "react-icons/wi";
import { WiCloudyGusts } from "react-icons/wi";
import { WiDirectionDown } from "react-icons/wi";

export const AirConditions = () => {
  const [isMore, setIsMore] = useState(false);
  const {
    current: {
      temperature,
      feels_like,
      chance_of_rain,
      sun_rise,
      sun_set,
      humidity,
      surface_pressure,
      wind_gusts,
      wind_speed,
    },
  } = useWeather();

  return (
    <div className="field mx-auto flex flex-col gap-3 w-full max-w-190">
      <div className="flex justify-between">
        <h1 className="uppercase font-bold">Air Conditions</h1>
        <button className="button" onClick={() => setIsMore(!isMore)}>
          {isMore ? "See less" : "See more"}
        </button>
      </div>

      <div className="flex flex-wrap gap-y-10">
        <div className="basis-1/2 flex-none">
          <div className="flex gap-2">
            <WiSunrise className="text-3xl" />
            <h3>Sun Rise</h3>
          </div>
          <p className="text-2xl text-white ">
            {new Date(sun_rise).getHours()}:{new Date(sun_rise).getMinutes()}
          </p>
        </div>

        <div className="basis-1/2 flex-none">
          <div className="flex gap-2">
            <WiSunset className="text-3xl" />
            <h3>Sun Set</h3>
          </div>
          <p className="text-2xl text-white ">
            {new Date(sun_set).getHours()}:{new Date(sun_set).getMinutes()}
          </p>
        </div>

        <div className="basis-1/2 flex-none">
          <div className="flex gap-2">
            <WiThermometer className="text-3xl" />
            <h3>Feels like</h3>
          </div>
          <p className="text-2xl text-white ">{feels_like.toFixed()}&#176;</p>
        </div>

        <div className="basis-1/2 flex-none">
          <div className="flex gap-2">
            <WiStrongWind className="text-3xl" />
            <h3>Wind Speed</h3>
          </div>
          <p className="text-2xl text-white ">{wind_speed} km/h</p>
        </div>

        {isMore && (
          <>
            <div className="basis-1/2 flex-none">
              <div className="flex gap-2">
                <WiRaindrop className="text-3xl" />
                <h3>Chance of rain</h3>
              </div>
              <p className="text-2xl text-white ">{chance_of_rain}%</p>
            </div>

            <div className="basis-1/2 flex-none">
              <div className="flex gap-2">
                <WiCloudyGusts className="text-3xl" />
                <h3>Wind Gusts</h3>
              </div>
              <p className="text-2xl text-white ">{wind_gusts} km/h</p>
            </div>
            <div className="basis-1/2 flex-none">
              <div className="flex gap-2">
                <WiHumidity className="text-3xl" />
                <h3>Humidity</h3>
              </div>
              <p className="text-2xl text-white ">{humidity}%</p>
            </div>

            <div className="basis-1/2 flex-none">
              <div className="flex gap-2">
                <WiDirectionDown className="text-3xl" />
                <h3>Surface Pressure</h3>
              </div>
              <p className="text-2xl text-white ">{surface_pressure} hPa</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
